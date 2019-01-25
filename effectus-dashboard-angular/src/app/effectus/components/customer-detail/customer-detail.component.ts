import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Customer } from "../../entity/customer.entity";
import { CustomersService } from "../../services/customers.service";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"]
})
export class CustomerDetailComponent implements OnInit {
  customer: Observable<Customer>;

  constructor(private data: CustomersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params['key'];
      this.customer = this.data.getCustomer(key);
    });
  }

}
