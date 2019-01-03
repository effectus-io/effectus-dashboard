import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomersGQL } from "./customers-query";
import { EffectusRoutingModule } from "../effectus-routing.module";
import { CustomerGQL } from "./customer-query";

@NgModule({
  declarations: [CustomerListComponent, CustomerDetailComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [CustomersGQL, CustomerGQL]
})
export class CustomerModule {}
