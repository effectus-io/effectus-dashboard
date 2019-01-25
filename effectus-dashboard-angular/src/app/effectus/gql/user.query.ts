import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { User } from "../entity/user.entity";

export interface Response {
 user: User;
}

@Injectable()
export class UserGQL extends Query<Response> {
  document = gql`
    query user($key: ID!) {
      user(key: $key) {
        key
        account
        name
        email
      }
    }
  `;
}
