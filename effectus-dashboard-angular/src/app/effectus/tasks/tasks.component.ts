import{Component, OnInit}from '@angular/core';
import gql from 'graphql-tag';
import {QueryRef, Apollo}from 'apollo-angular';

const QUERY = gql`
query tasks($offset: Int) {
    tasks(offset: $offset, first: 10) {
      key
      account
    }
  }
`;

@Component({
selector: 'app-tasks',
templateUrl: './tasks.component.html',
styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  page = 0;
  tasks: any[] = [];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.tasks = result.data && result.data.tasks;
    });
  }

}
