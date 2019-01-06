import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Customer } from "../entity/customer";

export interface Response {
  customers: Customer[];
}

@Injectable()
export class CustomersGQL extends Query<Response> {
  document = gql`
    query customers($offset: Int) {
      customers(offset: $offset, first: 10) {
        key
        name
      }
    }
  `;
}
