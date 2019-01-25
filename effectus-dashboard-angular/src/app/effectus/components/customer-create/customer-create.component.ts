import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormControl } from "@angular/forms";
import { Customer } from "../../entity/customer.entity";
import { CreateCustomerGQL } from "../../gql/customer.mutation";

@Component({
  selector: "app-customer-create",
  templateUrl: "./customer-create.component.html",
  styleUrls: ["./customer-create.component.scss"]
})
export class CustomerCreateComponent implements OnInit {
  account: String;
  customerForm = new FormGroup({
    name: new FormControl(""),
    // email: new FormControl("email"),
    // address: new FormGroup({
    //   city: new FormControl("city")
    // })
  });

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.account = params.get("account");
        console.log(this.account);
        return null;
      })
    );
  }

  onSubmit() {
    const result: Customer = Object.assign({}, this.customerForm.value);
    console.warn(result);
    // this.createCustomerGQL
    //   .mutate({
    //     account: this.account,
    //     name: result.name,
    //     email: result.email
    //   })
    //   .subscribe(customer => console.log(customer));
  }
}
