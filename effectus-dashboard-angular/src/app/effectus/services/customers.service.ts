import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CustomerGQL } from "../gql/customer.query";
import { CustomersGQL } from "../gql/customers.query";
import { CustomersByAccountGQL } from "../gql/customers-by-account.query";
import { Customer } from "../entity/customer.entity";

@Injectable({
  providedIn: "root"
})
export class CustomersService {

  constructor(
    private customer: CustomerGQL,
    private customers: CustomersGQL,
    private customersByAccount: CustomersByAccountGQL
  ) {}

  getCustomer(key: String): Observable<Customer> {
    return this.customer
      .watch({ key: key })
      .valueChanges.pipe(map(result => result.data.customer));
  }

  getCustomers(): Observable<Customer[]> {
    return this.customers
      .watch()
      .valueChanges.pipe(map(result => result.data.customers));
  }

  getCustomersByAccount(account: String): Observable<Customer[]> {
    return this.customersByAccount
      .watch({ account: account })
      .valueChanges.pipe(map(result => result.data.customersByAccount));
  }

}
