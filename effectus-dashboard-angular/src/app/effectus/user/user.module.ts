import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UsersGQL } from "./query/users.query";
import { EffectusRoutingModule } from "../effectus-routing.module";
import { UserGQL } from "./query/user.query";
import { UserLoginComponent } from "./user-login/user-login.component";

@NgModule({
  declarations: [UserDetailComponent, UserListComponent, UserLoginComponent],
  imports: [CommonModule, EffectusRoutingModule, ReactiveFormsModule],
  providers: [UsersGQL, UserGQL]
})
export class UserModule {}
