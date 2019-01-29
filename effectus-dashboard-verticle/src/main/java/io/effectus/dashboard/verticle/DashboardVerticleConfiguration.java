package io.effectus.dashboard.verticle;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString
public class DashboardVerticleConfiguration {

    private int port;

    @Builder
    public DashboardVerticleConfiguration(int port) {
        this.port = port;
    }
}
