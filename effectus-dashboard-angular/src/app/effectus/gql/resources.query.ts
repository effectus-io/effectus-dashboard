import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";

import gql from "graphql-tag";

import { Resource } from "../entity/resource.entity";

export interface Response {
  resources: Resource[];
}

@Injectable()
export class ResourcesGQL extends Query<Response> {
  document = gql`
    query resources($offset: Int) {
      resources(offset: $offset, first: 10) {
        key
        name
        account
      }
    }
  `;
}
