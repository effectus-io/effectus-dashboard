import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Router } from "@angular/router";
import { AccountsService } from "../../services/accounts.service";
import { Account } from "../../entity/account.entity";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  accounts: Observable<Account[]>;

  constructor(private data: AccountsService
    , private router: Router) {}

  ngOnInit() {
    this.accounts = this.data.getAccounts();
  }

  create() {
    console.log("Create");
    this.router.navigate(['/account/create']);
  }
 
}
