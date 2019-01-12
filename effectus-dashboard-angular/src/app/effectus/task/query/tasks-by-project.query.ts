import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Task } from "../entity/task.entity";

export interface Response {
 tasksByProject: Task[];
}

@Injectable()
export class TasksByProjectGQL extends Query<Response> {
  document = gql`
    query tasksByProject($project: ID!) {
        tasksByProject(project: $project, offset: 0, first: 20) {
        key
        account
        project
        location {
            longitude
            latitude
        }
      }
    }
  `;
}
