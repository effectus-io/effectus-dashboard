import { Component, OnInit, ViewChild } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

import { AccountsService } from "../../services/accounts.service";
import { Account } from "../../entity/account.entity";

@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.scss"]
})
export class AccountDetailComponent implements OnInit {
  account: Observable<Account>;

  teamsSize: number;
  projectsSize: number;

  constructor(private data: AccountsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.account = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("account");
        console.debug("Account:", key);
        return this.data.getAccount(key);
      })
    );
  }
}
