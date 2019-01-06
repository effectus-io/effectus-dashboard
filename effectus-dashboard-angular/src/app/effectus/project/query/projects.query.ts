import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Project } from "../entity/project.entity";

export interface Response {
  projects: Project[];
}

@Injectable()
export class ProjectsGQL extends Query<Response> {
  document = gql`
    query projects($offset: Int) {
      projects(offset: $offset, first: 10) {
        key
        account
        name
      }
    }
  `;
}
