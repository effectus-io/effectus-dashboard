import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { CustomerDetailComponent } from "./components/customer-detail/customer-detail.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AccountListComponent } from "./components/account-list/account-list.component";
import { AccountCreateComponent } from "./components/account-create/account-create.component";
import { AccountDetailComponent } from "./components/account-detail/account-detail.component";
import { TeamDetailComponent } from "./components/team-detail/team-detail.component";
import { ResourceDetailComponent } from "./components/resource-detail/resource-detail.component";
import { TaskDetailComponent } from "./components/task-detail/task-detail.component";
import { AssignmentDetailComponent } from "./components/assignment-detail/assignment-detail.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { DictionaryDetailComponent } from "./components/dictionary-detail/dictionary-detail.component";
import { GanttComponent } from "./components/gantt/gantt.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: "account",
    children: [
      { path: "", component: AccountListComponent },
      { path: "create", component: AccountCreateComponent },
      {
        path: ":account",
        component: AccountDetailComponent
      }
    ]
  },
  {
    path: "project",
    children: [{ path: ":key", component: ProjectDetailComponent }]
  },
  {
    path: "customer",
    children: [{ path: ":key", component: CustomerDetailComponent }]
  },
  {
    path: "team",
    children: [{ path: ":key", component: TeamDetailComponent }]
  },
  {
    path: "resource",
    children: [{ path: ":key", component: ResourceDetailComponent }]
  },
  {
    path: "task",
    children: [{ path: ":key", component: TaskDetailComponent }]
  },
  {
    path: "assignment",
    children: [{ path: ":key", component: AssignmentDetailComponent }]
  },
  {
    path: "user",
    children: [{ path: ":key", component: UserDetailComponent }]
  },
  {
    path: "dictionary",
    children: [{ path: ":key", component: DictionaryDetailComponent }]
  },
  {
    path: "gantt",
    component: GanttComponent
  },
  { path: "login", component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectusRoutingModule {}
