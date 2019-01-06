import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Project } from '../entity/project.entity';
import { ProjectsGQL } from '../query/projects.query';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(private projectsGQL: ProjectsGQL) {}

  ngOnInit() {
    this.projects = this.projectsGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.projects));
  }

}
