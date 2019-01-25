import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Team } from "../entity/team.entity";

export interface Response {
  teamsByAccount: Team[];
}

@Injectable()
export class TeamsByAccountGQL extends Query<Response> {
  document = gql`
    query teamsByAccount($account: ID!) {
      teamsByAccount(account: $account, offset: 0, first: 10) {
        key
        name
        account
      }
    }
  `;
}
