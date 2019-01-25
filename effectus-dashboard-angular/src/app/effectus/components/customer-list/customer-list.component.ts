import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { Customer } from "../../entity/customer.entity";
import { CustomersService } from "../../services/customers.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"]
})
export class CustomerListComponent implements OnInit {
  @Input("account") account: String;
  customers: Observable<Customer[]>;

  constructor(private data: CustomersService) {}

  ngOnInit() {
    if (this.account == null) {
      this.customers = this.data.getCustomers();
    } else {
      console.debug("Account:", this.account);
      this.customers = this.data.getCustomersByAccount(this.account);
    }
  }
}
