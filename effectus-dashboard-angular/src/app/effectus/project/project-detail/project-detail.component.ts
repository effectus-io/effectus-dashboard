import{Component, OnInit}from '@angular/core';

import { Observable } from "rxjs";
import { map ,switchMap} from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

import { Project } from '../entity/project.entity';
import { ProjectGQL } from '../query/project.query';

@Component({
selector: 'app-project-detail',
templateUrl: './project-detail.component.html',
styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Observable<Project>;

  constructor(private projectGQL: ProjectGQL, private route: ActivatedRoute) {}

  ngOnInit() {
    this.project = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.projectGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.project));
      })
    );
  }

}
