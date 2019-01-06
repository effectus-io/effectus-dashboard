import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Assignment } from "../entity/assignment";

export interface Response {
  assignments: Assignment[];
}

@Injectable()
export class AssignmentsGQL extends Query<Response> {
  document = gql`
    query assignments($offset: Int) {
      assignments(offset: $offset, first: 10) {
        key
        account
      }
    }
  `;
}
