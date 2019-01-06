import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Project } from "../entity/project.entity";

export interface Response {
  project: Project;
}

@Injectable()
export class ProjectGQL extends Query<Response> {
  document = gql`
    query project($key: ID!) {
      project(key: $key) {
        key
        name
        account
        customer
      }
    }
  `;
}
