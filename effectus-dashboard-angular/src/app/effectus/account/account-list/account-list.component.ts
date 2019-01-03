import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AccountsGQL } from "../accounts-query";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  accounts: Observable<Account[]>;

  constructor(private accountsGQL: AccountsGQL) {}

  ngOnInit() {
    this.accounts = this.accountsGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.accounts));
  }
}
