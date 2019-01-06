import{NgModule}from"@angular/core";
import {CommonModule }from "@angular/common";

import {AccountDetailComponent}from "./account-detail/account-detail.component";
import {AccountListComponent} from "./account-list/account-list.component";

import {EffectusRoutingModule}from "../effectus-routing.module";

import {AccountGQL}from "./query/account.query";
import {AccountsGQL}from "./query/accounts.query";

@NgModule({
declarations: [AccountDetailComponent, AccountListComponent],
imports: [CommonModule, EffectusRoutingModule],
providers: [AccountsGQL, AccountGQL]
})
export class AccountModule {

}
