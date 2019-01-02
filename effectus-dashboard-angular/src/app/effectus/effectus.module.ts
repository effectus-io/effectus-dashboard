import{NgModule}from"@angular/core";
import {CommonModule }from "@angular/common";
import {AccountsComponent}from "./accounts/accounts.component";
import {CustomersComponent} from "./customers/customers.component";
import {DashboardComponent}from "./dashboard/dashboard.component";
import { TeamsComponent}from "./teams/teams.component";
import {ProjectsComponent}from "./projects/projects.component";
import {ResourcesComponent}from "./resources/resources.component";
import {TasksComponent} from "./tasks/tasks.component";
import {AssignmentsComponent}from "./assignments/assignments.component";
import { UsersComponent}from "./users/users.component";

@NgModule({
declarations: [
AccountsComponent,
CustomersComponent,
DashboardComponent,
TeamsComponent,
ProjectsComponent,
ResourcesComponent,
TasksComponent,
AssignmentsComponent,
UsersComponent
],
imports: [CommonModule]
})
export class EffectusModule {

}
