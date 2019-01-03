import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [TaskDetailComponent, TasksComponent],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
