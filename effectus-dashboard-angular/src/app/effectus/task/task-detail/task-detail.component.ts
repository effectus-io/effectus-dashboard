import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { Task } from "../entity/task.entity";
import { TaskGQL } from "../query/task.query";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.scss"]
})
export class TaskDetailComponent implements OnInit {
  task: Observable<Task>;

  constructor(
    private taskGQL: TaskGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.task = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.taskGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.task));
      })
    );
  }
}
