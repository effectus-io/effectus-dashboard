import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Account } from "../entity/account.entity";
import { AccountsGQL } from "../gql/accounts.query";
import { Router } from "@angular/router";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  accounts: Observable<Account[]>;

  constructor(private accountsGQL: AccountsGQL, private router: Router) {}

  ngOnInit() {
    this.accounts = this.accountsGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.accounts));
  }

  create() {
    console.log("Create");
    this.router.navigate(['/account/create']);
  }
 
}
