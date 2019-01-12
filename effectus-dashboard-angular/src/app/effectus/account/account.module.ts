import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountDetailComponent } from "./account-detail/account-detail.component";
import { AccountListComponent } from "./account-list/account-list.component";

import { EffectusRoutingModule } from "../effectus-routing.module";

import { ProjectsByAccountGQL } from "../project/query/projects-by-account.query";
import { TeamsByAccountGQL } from "../team/query/teams-by-account.query";
import { AccountsGQL } from "./gql/accounts.query";
import { AccountGQL } from "./gql/account.query";
import { AccountCreateComponent } from "./account-create/account-create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateAccountGQL } from "./gql/account.mutation";

@NgModule({
  declarations: [
    AccountDetailComponent,
    AccountListComponent,
    AccountCreateComponent
  ],
  imports: [CommonModule, EffectusRoutingModule, ReactiveFormsModule],
  providers: [AccountsGQL, AccountGQL, CreateAccountGQL, ProjectsByAccountGQL, TeamsByAccountGQL]
})
export class AccountModule {}
