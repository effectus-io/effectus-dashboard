import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsComponent}from './effectus/accounts/accounts.component';
import {CustomersComponent}from './effectus/customers/customers.component';

const routes: Routes = [
{path: 'accounts', component: AccountsComponent},
{path: 'customers',component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
