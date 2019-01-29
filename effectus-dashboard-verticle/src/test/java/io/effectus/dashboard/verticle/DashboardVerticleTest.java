package io.effectus.dashboard.verticle;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.junit5.Timeout;
import io.vertx.junit5.VertxExtension;
import io.vertx.junit5.VertxTestContext;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
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
    public void bveforeEach(VertxTestContext testContext) {
        testContext.completeNow();
    }

    @Test()
    @Timeout(1000)
    public void start_verticle_server_test(Vertx vertx, VertxTestContext testContext) {
        vertx.deployVerticle(new DashboardVerticle(),
                new DeploymentOptions()
                        .setConfig(JsonObject.mapFrom(DashboardVerticleConfiguration
                                .builder().port(port)
                                .build())), testContext.completing());
    }

}