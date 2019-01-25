import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { User } from "../entity/user.entity";

export interface Response {
 users: User[];
}

@Injectable()
export class UsersGQL extends Query<Response> {
  document = gql`
    query users($offset: Int) {
      users(offset: $offset, first: 10) {
        key
        name
      }
    }
  `;
}
