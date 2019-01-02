import{Component, OnInit}from '@angular/core';
import gql from 'graphql-tag';
import {QueryRef, Apollo}from 'apollo-angular';

const QUERY = gql`
query projects($offset: Int) {
    projects(offset: $offset, first: 10) {
      key
      account
      customer
      name
    }
  }
`;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  page = 0;
  projects: any[] = [];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.projects = result.data && result.data.projects;
    });
  }

}
