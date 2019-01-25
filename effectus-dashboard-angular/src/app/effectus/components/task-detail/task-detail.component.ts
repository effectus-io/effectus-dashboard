import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { Task } from "../../entity/task.entity";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.scss"]
})
export class TaskDetailComponent implements OnInit {
  task: Observable<Task>;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }
}
