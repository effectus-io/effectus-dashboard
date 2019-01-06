import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserDetailComponent, UserListComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
