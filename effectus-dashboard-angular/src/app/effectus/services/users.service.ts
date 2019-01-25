import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { UserGQL } from "../gql/user.query";
import { User } from "../entity/user.entity";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private user: UserGQL) {}

  getUser(key: string): Observable<User> {
    return this.user
      .watch({
        key: key})
      .valueChanges.pipe(map(result => result.data.user));
  }

}
