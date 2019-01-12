import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";

import gql from "graphql-tag";

import { Resource } from "../entity/resource.entity";

export interface Response {
  resourcesByAccount: Resource[];
}

@Injectable()
export class ResourcesByAccountGQL extends Query<Response> {
  document = gql`
    query resourcesByAccount($account: ID!) {
      resourcesByAccount(account: $account, offset: 0, first: 10) {
        key
        name
      }
    }
  `;
}
