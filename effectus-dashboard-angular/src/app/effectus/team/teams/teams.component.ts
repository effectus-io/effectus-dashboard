import{Component, OnInit}from '@angular/core';
import {QueryRef, Apollo}from 'apollo-angular';
import gql from 'graphql-tag';

const TEAMS_QUERY = gql`
query teams($offset: Int) {
    teams(offset: $offset, first: 10) {
      key
      account
      name
    }
  }
`;

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  page = 0;
  teams: any[] = [];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: TEAMS_QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.teams = result.data && result.data.teams;
    });
  }

}
