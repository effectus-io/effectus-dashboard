import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TasksGQL } from "./query/tasks.query";
import { EffectusRoutingModule } from "../effectus-routing.module";
import { TaskGQL } from "./query/task.query";

@NgModule({
  declarations: [TaskDetailComponent, TaskListComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [TasksGQL, TaskGQL]
})
export class TaskModule {}
