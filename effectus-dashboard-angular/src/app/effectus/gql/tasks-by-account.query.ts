import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Task } from "../entity/task.entity";

export interface Response {
 tasksByAccount: Task[];
}

@Injectable()
export class TasksByAccountGQL extends Query<Response> {
  document = gql`
    query tasksByAccount($account: ID!) {
        tasksByAccount(account: $account, offset: 0, first: 20) {
        key
      }
    }
  `;
}
