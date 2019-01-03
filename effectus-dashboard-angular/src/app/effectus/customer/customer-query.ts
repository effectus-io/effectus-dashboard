import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Customer } from "./customer";

export interface Response {
  customer: Customer;
}

@Injectable()
export class CustomerGQL extends Query<Response> {
  document = gql`
    query customer($key: ID!) {
      customer(key: $key) {
        key
        name
        account
      }
    }
  `;
}
