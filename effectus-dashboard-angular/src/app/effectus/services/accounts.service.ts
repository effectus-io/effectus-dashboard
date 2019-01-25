import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AccountGQL } from "../gql/account.query";
import { AccountsGQL } from "../gql/accounts.query";
import { Account } from '../entity/account.entity';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private account: AccountGQL, private accounts: AccountsGQL) {}

  getAccount(key: String): Observable<Account> {
    return this.account
      .watch({ key: key })
      .valueChanges.pipe(map(result => result.data.account));
  }

  getAccounts(): Observable<Account[]> {
    return this.accounts
      .watch()
      .valueChanges.pipe(map(result => result.data.accounts));
  }
}
