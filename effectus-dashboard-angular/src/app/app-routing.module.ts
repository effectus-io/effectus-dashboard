import{NgModule}from"@angular/core";
import {Routes, RouterModule}from "@angular/router";
import {AccountsComponent}from "./effectus/accounts/accounts.component";
import {CustomersComponent}from "./effectus/customers/customers.component";
import { DashboardComponent}from "./effectus/dashboard/dashboard.component";
import {TeamsComponent} from "./effectus/teams/teams.component";
import {ProjectsComponent}from "./effectus/projects/projects.component";
import {ResourcesComponent}from "./effectus/resources/resources.component";
import {TasksComponent}from "./effectus/tasks/tasks.component";
import { UsersComponent}from "./effectus/users/users.component";
import {AssignmentsComponent} from "./effectus/assignments/assignments.component";

const routes: Routes = [
{path: "dashboard", component: DashboardComponent},
{path: "accounts", component: AccountsComponent },
{path: "customers", component: CustomersComponent},
{path: "teams", component: TeamsComponent},
{path: "projects", component: ProjectsComponent},
{path: "resources", component: ResourcesComponent},
{path: "tasks", component: TasksComponent},
{path: "assignments", component: AssignmentsComponent},
{ path: "users", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
