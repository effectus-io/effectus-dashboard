import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

import { Project } from "../entity/project.entity";
import { Task } from "../../task/entity/task.entity";

import { ProjectGQL } from "../query/project.query";
import { TasksByProjectGQL } from "../../task/query/tasks-by-project.query";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"]
})
export class ProjectDetailComponent implements OnInit {
  project: Observable<Project>;
  tasks: Observable<Task[]>;

  constructor(
    private projectGQL: ProjectGQL,
    private tasksByProjectGQL: TasksByProjectGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.project = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.projectGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.project));
      })
    );

    this.project.subscribe(project => {
      console.log(project);
      this.tasks = this.tasksByProjectGQL
        .watch({ project: project.key })
        .valueChanges.pipe(map(result => result.data.tasksByProject));
    });
  }
}
