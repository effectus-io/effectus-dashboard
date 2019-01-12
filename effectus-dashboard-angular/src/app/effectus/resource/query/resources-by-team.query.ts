import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";

import gql from "graphql-tag";

import { Resource } from "../entity/resource.entity";

export interface Response {
  resourcesByTeam: Resource[];
}

@Injectable()
export class ResourcesByTeamGQL extends Query<Response> {
  document = gql`
    query resourcesByTeam($team: ID!) {
      resourcesByTeam(team: $team, offset: 0, first: 10) {
        key
        name
      }
    }
  `;
}
