import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../../entity/user.entity";
import { UsersGQL } from "../../gql/users.query";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private usersGQL: UsersGQL) {}

  ngOnInit() {
    this.users = this.usersGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.users));
  }
}
