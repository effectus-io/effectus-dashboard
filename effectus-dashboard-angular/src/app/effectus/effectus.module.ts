import{NgModule}from'@angular/core';
import {CommonModule }from '@angular/common';
import {AccountsComponent}from './accounts/accounts.component';
import {CustomersComponent} from './customers/customers.component';
import {DashboardComponent}from './dashboard/dashboard.component';

@NgModule({
declarations: [
AccountsComponent,
CustomersComponent,
DashboardComponent
],
imports: [
CommonModule
]
})
export class EffectusModule {

}
