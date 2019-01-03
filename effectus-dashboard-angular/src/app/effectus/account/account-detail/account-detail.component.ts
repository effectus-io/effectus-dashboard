import{Component, OnInit}from "@angular/core";
import {AccountGQL}from "../account-query";
import {Observable}from "rxjs";
import {map, switchMap} from "rxjs/operators";
import { ActivatedRoute}from "@angular/router";

@Component({
selector: "app-account-detail",
templateUrl: "./account-detail.component.html",
styleUrls: ["./account-detail.component.scss"]
})
export class AccountDetailComponent implements OnInit {
account: Observable< Account>;

constructor(private accountGQL: AccountGQL, private route: ActivatedRoute) {}

  ngOnInit() {
    this.account = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.accountGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.account));
      })
    );
  }
}
