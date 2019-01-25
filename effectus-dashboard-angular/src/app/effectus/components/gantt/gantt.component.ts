import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Travel } from "./entity/travel.entity";
import { Location } from "./entity/location.entity";
import { D3Service } from "src/app/d3/services/d3.service";

@Component({
  selector: "app-gantt",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./gantt.component.html",
  styleUrls: ["./gantt.component.scss"]
})
export class GanttComponent implements OnInit {
  travels: Travel[] = [];

  constructor(private d3service: D3Service) {
    // d3service.applyZoomableBehaviour
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      var source: Location = new Location(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
      var target: Location = new Location(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
      this.travels.push(new Travel(source, target));
    }
  }
}
