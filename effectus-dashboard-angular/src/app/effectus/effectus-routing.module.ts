import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountListComponent } from "./account/account-list/account-list.component";
import { AccountDetailComponent } from "./account/account-detail/account-detail.component";
import { CustomerListComponent } from "./customer/customer-list/customer-list.component";
import { CustomerDetailComponent } from "./customer/customer-detail/customer-detail.component";
import { ProjectListComponent } from "./project/project-list/project-list.component";
import { ProjectDetailComponent } from "./project/project-detail/project-detail.component";
import { TeamListComponent } from "./team/team-list/team-list.component";
import { TeamDetailComponent } from "./team/team-detail/team-detail.component";
import { ResourceListComponent } from "./resource/resource-list/resource-list.component";
import { ResourceDetailComponent } from "./resource/resource-detail/resource-detail.component";
import { TaskListComponent } from "./task/task-list/task-list.component";
import { TaskDetailComponent } from "./task/task-detail/task-detail.component";
import { AssignmentListComponent } from "./assignment/assignment-list/assignment-list.component";
import { AssignmentDetailComponent } from "./assignment/assignment-detail/assignment-detail.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { DictionaryListComponent } from "./dictionary/dictionary-list/dictionary-list.component";
import { DictionaryDetailComponent } from "./dictionary/dictionary-detail/dictionary-detail.component";
import { GanttComponent } from "./gantt/gantt.component";

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
  },
  {
    path: "project",
    children: [
      { path: "", component: ProjectListComponent },
      { path: ":key", component: ProjectDetailComponent }
    ]
  },
  {
    path: "team",
    children: [
      { path: "", component: TeamListComponent },
      { path: ":key", component: TeamDetailComponent }
    ]
  },
  {
    path: "resource",
    children: [
      { path: "", component: ResourceListComponent },
      { path: ":key", component: ResourceDetailComponent }
    ]
  },
  {
    path: "task",
    children: [
      { path: "", component: TaskListComponent },
      { path: ":key", component: TaskDetailComponent }
    ]
  },
  {
    path: "assignment",
    children: [
      { path: "", component: AssignmentListComponent },
      { path: ":key", component: AssignmentDetailComponent }
    ]
  },
  {
    path: "user",
    children: [
      { path: "", component: UserListComponent },
      { path: ":key", component: UserDetailComponent }
    ]
  },
  {
    path: "dictionary",
    children: [
      { path: "", component: DictionaryListComponent },
      { path: ":key", component: DictionaryDetailComponent }
    ]
  },
  {
    path: "gantt",
    component: GanttComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectusRoutingModule {}
