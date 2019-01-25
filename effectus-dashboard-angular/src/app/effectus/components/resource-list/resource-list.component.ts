import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Resource } from "../../entity/resource.entity";
import { ResourcesGQL } from "../../gql/resources.query";
import { ResourcesService } from "../../services/resources.service";

@Component({
  selector: "app-resource-list",
  templateUrl: "./resource-list.component.html",
  styleUrls: ["./resource-list.component.scss"]
})
export class ResourceListComponent implements OnInit {
  @Input("account") account: String;
  resources: Observable<Resource[]>;

  constructor(private data: ResourcesService) {}

  ngOnInit() {
    if (this.account == null) {
      this.resources = this.data.getResources();
    } else {
      console.debug("Account:", this.account);
      this.resources = this.data.getResourcesByAccount(this.account);
    }
  }

}
