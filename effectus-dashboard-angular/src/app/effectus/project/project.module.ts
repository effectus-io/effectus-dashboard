import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectusRoutingModule } from "../effectus-routing.module";

import { ProjectListComponent } from "./project-list/project-list.component";

import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectGQL } from "./query/project.query";
import { ProjectsGQL } from "./query/projects.query";
import { TasksByProjectGQL } from "../task/query/tasks-by-project.query";

@NgModule({
  declarations: [ProjectDetailComponent, ProjectListComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [ProjectGQL, ProjectsGQL, TasksByProjectGQL]
})
export class ProjectModule {}
