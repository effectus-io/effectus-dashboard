import{Component, OnInit}from '@angular/core';
import gql from 'graphql-tag';
import {QueryRef, Apollo}from 'apollo-angular';

const CUSTOMERS_QUERY = gql`
query customers($offset: Int) {
    customers(offset: $offset, first: 10) {
      key
      account
      name
    }
  }
`;

@Component({
selector: 'app-customers',
templateUrl: './customers.component.html',
styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  page = 0;
  customers: any[] = [];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: CUSTOMERS_QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.customers = result.data && result.data.customers;
    });
  }

}
