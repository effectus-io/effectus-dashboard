import{Component, OnInit}from "@angular/core";
import gql from "graphql-tag";
import {Apollo, QueryRef}from "apollo-angular";

const ACCOUNTS_QUERY = gql`
query accounts($offset: Int) {
    accounts(offset: $offset, first: 10) {
      key
      name
    }
  }
`;

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"]
})
export class AccountsComponent implements OnInit {
  page = 0;
  accounts: any[] = [];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: ACCOUNTS_QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.accounts = result.data && result.data.accounts;
    });
  }
}
