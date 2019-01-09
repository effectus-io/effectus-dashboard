import { Directive, Input, ElementRef, OnInit } from "@angular/core";
import { D3Service } from "../services/d3.service";

@Directive({
  selector: "[zoomable]"
})
export class ZoomableDirective implements OnInit {
  @Input('zoomableFor') for: string;

  constructor(private d3Service: D3Service, private element: ElementRef) {
    console.log(this.element);
  }

  ngOnInit() {
    console.log(this.for);

    this.d3Service.applyZoomableBehaviour(
      this.for,
      this.element
    );
  }
}
