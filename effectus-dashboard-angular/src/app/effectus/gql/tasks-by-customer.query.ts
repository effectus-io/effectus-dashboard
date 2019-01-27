import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Task } from "../entity/task.entity";

export interface Response {
 tasksByCustomer: Task[];
}

@Injectable()
export class TasksByCustomerGQL extends Query<Response> {
  document = gql`
    query tasksByCustomer($customer: ID!) {
        tasksByCustomer(customer: $customer, offset: 0, first: 20) {
        key
      }
    }
  `;
}
