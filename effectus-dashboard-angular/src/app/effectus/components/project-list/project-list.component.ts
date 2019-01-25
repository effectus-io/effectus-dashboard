import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";

import { ActivatedRoute } from "@angular/router";
import { Project } from "../../entity/project.entity";
import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"]
})
export class ProjectListComponent implements OnInit {
  @Input("account") account: String;
  projects: Observable<Project[]>;

  constructor(private data: ProjectsService) {}

  ngOnInit() {
    if (this.account == null) {
      this.projects = this.data.getProjects();
    } else {
      console.debug("Account:", this.account);
      this.projects = this.data.getProjectsByAccount(this.account);
    }
  }

}
