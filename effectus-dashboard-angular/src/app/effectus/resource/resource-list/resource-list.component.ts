import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Resource } from "../entity/resource.entity";
import { ResourcesGQL } from "../query/resources.query";

@Component({
  selector: "app-resource-list",
  templateUrl: "./resource-list.component.html",
  styleUrls: ["./resource-list.component.scss"]
})
export class ResourceListComponent implements OnInit {
  resources: Observable<Resource[]>;

  constructor(private resourcesGQL: ResourcesGQL) {}

  ngOnInit() {
    this.resources = this.resourcesGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.resources));
  }
}
