import{Injectable}from'@angular/core';
import {Query}from 'apollo-angular';
import gql from 'graphql-tag';

import { Account } from "../entity/account.entity";

export interface Response {
accounts: Account[];
}

@Injectable()
export class AccountsGQL extends Query< Response> {
document = gql`
query accounts($offset: Int) {
    accounts(offset: $offset, first: 10) {
      key
      name
    }
  }
`;
}

