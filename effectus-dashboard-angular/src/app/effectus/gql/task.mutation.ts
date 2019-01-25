import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class CreateTaskGQL extends Mutation {
  document = gql`
    mutation createTask($account: ID!, $task: TaskInput!) {
      createTask(account: {name: $name}) {
        key
        name
      }
    }
  `;
}