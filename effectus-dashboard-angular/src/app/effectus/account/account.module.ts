import{NgModule}from"@angular/core";
import {CommonModule }from "@angular/common";
import {AccountDetailComponent}from "./account-detail/account-detail.component";
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountGQL}from "./account-query";
import {EffectusRoutingModule}from "../effectus-routing.module";
import {AccountsGQL}from "./accounts-query";

@NgModule({
declarations: [AccountDetailComponent, AccountListComponent],
imports: [CommonModule, EffectusRoutingModule],
providers: [AccountsGQL, AccountGQL]
})
export class AccountModule {

}
