import { Component, OnInit, Input } from "@angular/core";
import { rgb, RGBColor } from "d3";

import { Location } from "../entity/location.entity";

@Component({
  selector: "[resourceVisual]",
  templateUrl: "./resource-visual.component.html",
  styleUrls: ["./resource-visual.component.scss"]
})
export class ResourceVisualComponent implements OnInit {
  @Input("location") location: Location;

  constructor() {}

  ngOnInit() {
    console.debug(this.location);
  }

  get color(): RGBColor {
    return rgb(176,212,243);
  }
}
