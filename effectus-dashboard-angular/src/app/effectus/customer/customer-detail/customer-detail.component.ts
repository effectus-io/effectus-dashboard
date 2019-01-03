import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer";
import { Observable } from "rxjs";
import { map ,switchMap} from "rxjs/operators";
import { CustomerGQL } from "../customer-query";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"]
})
export class CustomerDetailComponent implements OnInit {
  customer: Observable<Customer>;

  constructor(private customerGQL: CustomerGQL, private route: ActivatedRoute) {}

  ngOnInit() {
    this.customer = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.customerGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.customer));
      })
    );
  }
}
