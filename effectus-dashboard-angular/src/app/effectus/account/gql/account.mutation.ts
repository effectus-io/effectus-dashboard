import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class CreateAccountGQL extends Mutation {
  document = gql`
    mutation createAccount($name: String!) {
      createAccount(account: {name: $name}) {
        key
        name
      }
    }
  `;
}