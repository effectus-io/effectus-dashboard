import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UserDetailComponent, UsersComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
