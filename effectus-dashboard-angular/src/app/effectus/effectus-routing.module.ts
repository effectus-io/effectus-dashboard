import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountListComponent } from "./account/account-list/account-list.component";
import { AccountDetailComponent } from "./account/account-detail/account-detail.component";
import { CustomerListComponent } from "./customer/customer-list/customer-list.component";
import { CustomerDetailComponent } from "./customer/customer-detail/customer-detail.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: "account",
    children: [
      { path: "", component: AccountListComponent },
      { path: ":key", component: AccountDetailComponent }
    ]
  },
  {
    path: "customer",
    children: [
      { path: "", component: CustomerListComponent },
      { path: ":key", component: CustomerDetailComponent }
    ]
  }
  // { path: "teams", component: TeamsComponent },
  // { path: "projects", component: ProjectsComponent },
  // { path: "resources", component: ResourcesComponent },
  // { path: "tasks", component: TasksComponent },
  // { path: "assignments", component: AssignmentsComponent },
  // { path: "users", component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectusRoutingModule {}
