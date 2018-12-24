import{NgModule}from'@angular/core';
import {CommonModule }from '@angular/common';
import {AccountsComponent}from './accounts/accounts.component';
import {CustomersComponent} from './customers/customers.component';

@NgModule({
declarations: [
AccountsComponent,
CustomersComponent
],
imports: [
CommonModule
]
})
export class EffectusModule {

}
