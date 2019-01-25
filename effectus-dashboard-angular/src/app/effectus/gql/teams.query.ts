import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Team } from "../entity/team.entity";

export interface Response {
  teams: Team[];
}

@Injectable()
export class TeamsGQL extends Query<Response> {
  document = gql`
    query teams($offset: Int) {
      teams(offset: $offset, first: 10) {
        key
        name
      }
    }
  `;
}
