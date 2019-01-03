import{Injectable}from'@angular/core';
import {Query}from 'apollo-angular';
import gql from 'graphql-tag';

export interface Response {
account: Account;
}

@Injectable()
export class AccountGQL extends Query < Response> {
document = gql`
query account($key: ID!) {
    account(key: $key) {
      key
      name
    }
  }
`;
}

