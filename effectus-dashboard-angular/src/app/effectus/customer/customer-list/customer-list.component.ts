import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Customer } from "../entity/customer.entity";
import { CustomersGQL } from "../query/customers.query";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"]
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;

  constructor(private customersGQL: CustomersGQL) {}

  ngOnInit() {
    this.customers = this.customersGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.customers));
  }
}
