import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Assignment } from "../entity/assignment";

export interface Response {
  assignment: Assignment;
}

@Injectable()
export class AssignmentGQL extends Query<Response> {
  document = gql`
    query assignment($key: ID!) {
      assignment(key: $key) {
        key
        account
        task
        resource
      }
    }
  `;
}
