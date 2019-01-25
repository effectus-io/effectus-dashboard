import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Customer } from "../entity/customer.entity";

export interface Response {
  customersByAccount: Customer[];
}

@Injectable()
export class CustomersByAccountGQL extends Query<Response> {
  document = gql`
    query customersByAccount($account: ID!) {
      customersByAccount(account: $account) {
        key
        name
      }
    }
  `;
}
