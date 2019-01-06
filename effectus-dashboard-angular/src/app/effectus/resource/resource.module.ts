import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResourceDetailComponent } from "./resource-detail/resource-detail.component";
import { ResourceListComponent } from "./resource-list/resource-list.component";
import { ResourceGQL } from "./query/resource.query";
import { ResourcesGQL } from "./query/resources.query";
import { EffectusRoutingModule } from "../effectus-routing.module";

@NgModule({
  declarations: [ResourceDetailComponent, ResourceListComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [ResourceGQL, ResourcesGQL]
})
export class ResourceModule {}
