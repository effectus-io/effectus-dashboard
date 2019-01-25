import { Component, OnInit, Input } from "@angular/core";
import { Location } from "../entity/location.entity";

@Component({
  selector: "[travelVisual]",
  templateUrl: "./travel-visual.component.html",
  styleUrls: ["./travel-visual.component.scss"]
})
export class TravelVisualComponent implements OnInit {
  @Input('source') source: Location;
  @Input('target') target: Location;

  constructor() {
  }

  ngOnInit() {
    console.debug(this.source);
    console.debug(this.target);
  }
}
