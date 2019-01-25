import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { Resource } from "../../entity/resource.entity";
import { ResourceGQL } from "../../gql/resource.query";

@Component({
  selector: "app-resource-detail",
  templateUrl: "./resource-detail.component.html",
  styleUrls: ["./resource-detail.component.scss"]
})
export class ResourceDetailComponent implements OnInit {
  resource: Observable<Resource>;

  constructor(
    private resourceGQL: ResourceGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.resource = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.resourceGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.resource));
      })
    );
  }
}
