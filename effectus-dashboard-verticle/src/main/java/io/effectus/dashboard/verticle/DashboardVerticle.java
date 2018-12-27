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

    @Override
    public void init(Vertx vertx, Context context) {
        super.init(vertx, context);
        log.info("INIT: {}", context);
    }

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        log.info("START");

        HttpServer server = vertx.createHttpServer();

        Router router = Router.router(vertx);

        router.route("/*").handler(BodyHandler.create());

        router.route(HttpMethod.GET, "/*")
                .handler(StaticHandler.create("dashboard", this.getClass().getClassLoader()).setCachingEnabled(false));

        server.requestHandler(router).listen(8080, event -> {
            if (event.succeeded()) {
                log.info("DASHBOARD server listening on port 8080");
                startFuture.complete();
            } else {
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
