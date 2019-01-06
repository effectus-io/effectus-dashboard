import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UsersGQL } from "./query/users.query";
import { EffectusRoutingModule } from "../effectus-routing.module";
import { UserGQL } from "./query/user.query";

@NgModule({
  declarations: [UserDetailComponent, UserListComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [UsersGQL, UserGQL]
})
export class UserModule {}
