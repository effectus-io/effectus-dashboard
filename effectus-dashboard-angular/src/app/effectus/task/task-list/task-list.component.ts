import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Task } from "../entity/task.entity";
import { TasksGQL } from "../query/tasks.query";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;

  constructor(private tasksGQL: TasksGQL) {}

  ngOnInit() {
    this.tasks = this.tasksGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.tasks));
  }
}
