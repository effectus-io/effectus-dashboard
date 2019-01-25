import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class CreateCustomerGQL extends Mutation {
  document = gql`
    mutation createCustomer($account: ID!, $name: String, $email: String) {
      createCustomer(account: $account, customer: {name: $name, email: $email}) {
        key
        name
      }
    }
  `;
}
