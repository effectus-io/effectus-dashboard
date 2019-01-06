import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

import { Task } from "../entity/task.entity";

export interface Response {
  task: Task;
}

@Injectable()
export class TaskGQL extends Query<Response> {
  document = gql`
    query task($key: ID!) {
      task(key: $key) {
        key
        account
        project
        customer
      }
    }
  `;
}
