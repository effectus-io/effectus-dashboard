import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Project } from "../../entity/project.entity";
import { Task } from "../../entity/task.entity";
import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"]
})
export class ProjectDetailComponent implements OnInit {
  project: Observable<Project>;
  tasks: Observable<Task[]>;

  constructor(private data: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params['key'];
      this.project = this.data.getProject(key);
    });
  }
}
