import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Resource } from "../entity/resource.entity";

export interface Response {
  resource: Resource;
}

@Injectable()
export class ResourceGQL extends Query<Response> {
  document = gql`
    query resource($key: ID!) {
      resource(key: $key) {
        key
        name
        account
        location {
          longitude
          latitude
        }
      }
    }
  `;
}
