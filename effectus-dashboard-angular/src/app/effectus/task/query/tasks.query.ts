import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Task } from "../entity/task.entity";

export interface Response {
 tasks: Task[];
}

@Injectable()
export class TasksGQL extends Query<Response> {
  document = gql`
    query tasks($offset: Int) {
      tasks(offset: $offset, first: 10) {
        key
        account        
      }
    }
  `;
}
