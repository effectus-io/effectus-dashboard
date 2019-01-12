import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Project } from "../entity/project.entity";

export interface Response {
  projectsByAccount: Project[];
}

@Injectable()
export class ProjectsByAccountGQL extends Query<Response> {
  document = gql`
    query projectsByAccount($account: ID!) {
      projectsByAccount(account: $account, offset: 0, first: 10) {
        key
        account
        name
      }
    }
  `;
}
