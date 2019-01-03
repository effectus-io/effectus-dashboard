import{Component, OnInit}from '@angular/core';
import gql from 'graphql-tag';
import {QueryRef, Apollo}from 'apollo-angular';

const QUERY = gql`
query resources($offset: Int) {
    resources(offset: $offset, first: 10) {
      key
      name
      account
      team
    }
  }
`;

@Component({
selector: 'app-resources',
templateUrl: './resources.component.html',
styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  page = 0;
  resources: any[] = [];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.resources = result.data && result.data.resources;
    });
  }

}
