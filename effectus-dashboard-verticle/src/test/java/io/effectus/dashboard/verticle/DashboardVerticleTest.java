package io.effectus.dashboard.verticle;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.client.WebClient;
import io.vertx.ext.web.codec.BodyCodec;
import io.vertx.junit5.VertxExtension;
import io.vertx.junit5.VertxTestContext;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.extension.ExtendWith;

import java.io.IOException;
import java.net.ServerSocket;

@Slf4j
@ExtendWith(VertxExtension.class)
class DashboardVerticleTest {

    private static int port;

    @BeforeAll
    public static void deploy_verticle(Vertx vertx, VertxTestContext testContext) throws IOException {
        ServerSocket socket = new ServerSocket(0);
        port = socket.getLocalPort();
        socket.close();
        testContext.completeNow();
    }

    @BeforeEach
    public void bveforeEach(Vertx vertx, VertxTestContext testContext) {
        vertx.deployVerticle(new DashboardVerticle(),
                new DeploymentOptions()
                        .setConfig(JsonObject.mapFrom(DashboardVerticleConfiguration
                                .builder().port(port)
                                .build())), testContext.completing());
    }

    // Repeat this test 3 times
    @RepeatedTest(3)
    void http_server_check_response(Vertx vertx, VertxTestContext testContext) {
        WebClient client = WebClient.create(vertx);
        client.get(port, "localhost", "/")
                .as(BodyCodec.string())
                .send(testContext.succeeding(response -> testContext.verify(() -> {
                    Assertions.assertThat(response.body()).startsWith("<!DOCTYPE html>");
                    testContext.completeNow();
                })));
    }

}