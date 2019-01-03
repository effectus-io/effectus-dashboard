import{NgModule}from"@angular/core";
import {Routes, RouterModule}from "@angular/router";
import {DashboardComponent}from "./dashboard/dashboard.component";
import { CustomersComponent}from "./customers/customers.component";
import {TeamsComponent}from "./teams/teams.component";
import {ProjectsComponent}from "./projects/projects.component";
import {ResourcesComponent} from "./resources/resources.component";
import {TasksComponent}from "./tasks/tasks.component";
import { AssignmentsComponent}from "./assignments/assignments.component";
import {UsersComponent}from "./users/users.component";
import {AccountListComponent}from "./account/account-list/account-list.component";
import { AccountDetailComponent}from "./account/account-detail/account-detail.component";

const routes: Routes = [
{path: "dashboard", component: DashboardComponent},
{
path: "account",
children: [
{path: "", component: AccountListComponent},
{path: ":key", component: AccountDetailComponent}
]
},
{path: "customers", component: CustomersComponent},
{path: "teams", component: TeamsComponent},
{path: "projects", component: ProjectsComponent },
{path: "resources", component: ResourcesComponent},
{path: "tasks", component: TasksComponent},
{path: "assignments", component: AssignmentsComponent},
{path: "users", component: UsersComponent}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectusRoutingModule {}
