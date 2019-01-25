import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { Project } from "../entity/project.entity";
import { ProjectsGQL } from "../gql/projects.query";
import { ProjectGQL } from "../gql/project.query";
import { ProjectsByAccountGQL } from "../gql/projects-by-account.query";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor(
    private project: ProjectGQL,
    private projects: ProjectsGQL,
    private projectsByAccount: ProjectsByAccountGQL
  ) {}

  getProject(project: String): Observable<Project> {
    return this.project
      .watch({ key: project })
      .valueChanges.pipe(map(result => result.data.project));
  }

  getProjects(): Observable<Project[]> {
    return this.projects
      .watch()
      .valueChanges.pipe(map(result => result.data.projects));
  }

  getProjectsByAccount(account: String): Observable<Project[]> {
    return this.projectsByAccount
      .watch({ account: account })
      .valueChanges.pipe(map(result => result.data.projectsByAccount));
  }
}
