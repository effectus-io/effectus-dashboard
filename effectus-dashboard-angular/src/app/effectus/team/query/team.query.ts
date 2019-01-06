import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Team } from "../entity/team.entity";

export interface Response {
  team: Team;
}

@Injectable()
export class TeamGQL extends Query<Response> {
  document = gql`
    query team($key: ID!) {
      team(key: $key) {
        key
        account
        name
      }
    }
  `;
}
