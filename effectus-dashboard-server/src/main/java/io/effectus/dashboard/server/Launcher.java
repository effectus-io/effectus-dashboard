package io.effectus.dashboard.server;

import io.effectus.dashboard.verticle.DashboardVerticle;
import io.effectus.dashboard.verticle.DashboardVerticleConfiguration;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.core.json.JsonObject;
import io.vertx.core.spi.cluster.ClusterManager;
import io.vertx.spi.cluster.zookeeper.ZookeeperClusterManager;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Launcher {

    public static void main(String[] rags) {

        JsonObject zkConfig = new JsonObject();
        zkConfig.put("zookeeperHosts", "zookeeper");
        zkConfig.put("rootPath", "io.vertx");
        zkConfig.put("retry", new JsonObject()
                .put("initialSleepTime", 3000)
                .put("maxTimes", 3));

        ClusterManager mgr = new ZookeeperClusterManager(zkConfig);
        VertxOptions options = new VertxOptions().setClusterManager(mgr);

        DashboardVerticleConfiguration config = DashboardVerticleConfiguration.builder().port(8080).build();

        Vertx.clusteredVertx(options, res -> {
            if (res.succeeded()) {
                Vertx vertx = res.result();
                log.info("Vertx: {}", vertx);

                vertx.deployVerticle(new DashboardVerticle(), new DeploymentOptions().setConfig(JsonObject.mapFrom(config)), deploy -> {
                    if (deploy.succeeded()) {
                        log.info("Deployed: {}", deploy.result());
                    } else {
                        log.error("Failed to deploy", deploy.cause());
                    }
                });

                //                final ServiceDiscovery discovery = ServiceDiscovery.create(vertx,
//                        new ServiceDiscoveryOptions()
//                                .setAnnounceAddress("service-announce")
//                                .setName("effectus-dashboard-server"));
//
//                //                discovery.close();
//
//
//                Record record1 = HttpEndpoint.createRecord(
//                        "effectus-query-graphql", // The service name
//                        "localhost", // The host
//                        3000, // the port
//                        "/graphql" // the root of the service
//                );
//
//                discovery.publish(record1, event -> {
//                    if (event.succeeded()) {
//                    } else {
//                        log.error("Failed to publish record", event.cause());
//                    }
//                });
//
//                discovery.getRecord(new JsonObject().put("name", "effectus-query-graphql"), ar -> {
//                    if (ar.succeeded() && ar.result() != null) {
//                        log.info("HTTP: {}", ar.result());
//                        // Retrieve the service reference
////                        ServiceReference reference = discovery.getReference(ar.result());
////                        // Retrieve the service object
////                        HttpClient client = reference.getAs(HttpClient.class);
////
////                        reference.release();
//                    }
//                });
//
//                vertx.setPeriodic(5000, event -> {
//                    discovery.getRecord(r -> true, ar -> {
//                        if (ar.succeeded()) {
//                            if (ar.result() != null) {
//                                // we have a record
//                                log.info("Record: {}", Json.encodePrettily(ar.result()));
//                            } else {
//                                // the lookup succeeded, but no matching service
//                            }
//                        } else {
//                            // lookup failed
//                            log.warn("Error in lookup", ar.cause().getMessage());
//                        }
//                    });
//                });

            } else {
                // failed!
                log.error("Failed to connect", res.cause());
            }
        });


    }

}
