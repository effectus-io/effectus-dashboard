package io.effectus.dashboard.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Context;
import io.vertx.core.Future;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.StaticHandler;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DashboardVerticle extends AbstractVerticle {

    private DashboardVerticleConfiguration config;

    @Override
    public void init(Vertx vertx, Context context) {
        super.init(vertx, context);
        log.info("INIT: {}", context);
        this.config = context.config().mapTo(DashboardVerticleConfiguration.class);
    }

    @Override
    public void start(Future<Void> startFuture) {
        log.info("START");

        HttpServer server = vertx.createHttpServer();

        Router router = Router.router(vertx);

        router.route("/*").handler(BodyHandler.create());

        router.route(HttpMethod.GET, "/*")
                .handler(StaticHandler.create("dashboard", this.getClass().getClassLoader()).setCachingEnabled(false));

        server.requestHandler(router).listen(config.getPort(), event -> {
            if (event.succeeded()) {
                log.info("DASHBOARD server listening on port: {}", config.getPort());
                startFuture.complete();
            } else {
                log.warn("Failed to start DASHBOARD server on port: {}", config.getPort());
                startFuture.fail(event.cause());
            }
        });
    }

    @Override
    public void stop(Future<Void> stopFuture) throws Exception {
        super.stop(stopFuture);
        log.info("STOP");
    }

}
