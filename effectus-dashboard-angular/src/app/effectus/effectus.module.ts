import{NgModule}from"@angular/core";
import {CommonModule }from "@angular/common";
import {CustomersComponent}from "./customers/customers.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TeamsComponent}from "./teams/teams.component";
import { ProjectsComponent}from "./projects/projects.component";
import {ResourcesComponent}from "./resources/resources.component";
import {TasksComponent}from "./tasks/tasks.component";
import {AssignmentsComponent} from "./assignments/assignments.component";
import {UsersComponent}from "./users/users.component";
import { UserDetailComponent}from "./user-detail/user-detail.component";
import {EffectusRoutingModule}from "./effectus-routing.module";
import { AccountModule}from "./account/account.module";

@NgModule({
declarations: [
CustomersComponent,
DashboardComponent,
TeamsComponent,
ProjectsComponent,
ResourcesComponent,
TasksComponent,
AssignmentsComponent,
UsersComponent,
UserDetailComponent
],
imports: [CommonModule, EffectusRoutingModule, AccountModule],
exports: []
})
export class EffectusModule {

}
