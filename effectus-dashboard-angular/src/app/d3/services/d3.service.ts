import { Injectable, ElementRef } from "@angular/core";

import * as d3 from "d3";

@Injectable({
  providedIn: "root"
})
export class D3Service {
  constructor() {}

  applyZoomableBehaviour(svgElement: string, containerElement: ElementRef) {
    let svg, container, zoomed, zoom;

    console.log(svgElement);
    console.log(containerElement);
    
    svg = d3.select(svgElement);
    console.log(svg);
    container = d3.select(containerElement.nativeElement);

    zoomed = () => {
      const transform = d3.event.transform;
      console.log(transform);
      container.attr(
        "transform",
        "translate(" +
          transform.x +
          "," +
          transform.y +
          ") scale(" +
          transform.k +
          ")"
      );
    };

    zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);
  }
}
