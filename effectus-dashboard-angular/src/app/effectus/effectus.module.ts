import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { D3Module } from "../d3/d3.module";

import { EffectusRoutingModule } from "./effectus-routing.module";

import { GanttComponent } from "./components/gantt/gantt.component";
import { ResourceVisualComponent } from "./components/gantt/resource-visual/resource-visual.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TravelVisualComponent } from "./components/gantt/travel-visual/travel-visual.component";
import { AccountListComponent } from "./components/account-list/account-list.component";
import { AccountDetailComponent } from "./components/account-detail/account-detail.component";
import { AccountCreateComponent } from "./components/account-create/account-create.component";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { CustomerDetailComponent } from "./components/customer-detail/customer-detail.component";
import { TeamListComponent } from "./components/team-list/team-list.component";
import { TeamDetailComponent } from "./components/team-detail/team-detail.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskDetailComponent } from "./components/task-detail/task-detail.component";
import { ResourceListComponent } from "./components/resource-list/resource-list.component";
import { ResourceDetailComponent } from "./components/resource-detail/resource-detail.component";
import { AssignmentListComponent } from "./components/assignment-list/assignment-list.component";
import { AssignmentDetailComponent } from "./components/assignment-detail/assignment-detail.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { DictionaryListComponent } from "./components/dictionary-list/dictionary-list.component";
import { DictionaryDetailComponent } from "./components/dictionary-detail/dictionary-detail.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";

import { CustomersService } from "./services/customers.service";
import { TeamsService } from "./services/teams.service";
import { ResourcesService } from "./services/resources.service";
import { TasksService } from "./services/tasks.service";
import { ProjectsService } from "./services/projects.service";
import { AccountsService } from "./services/accounts.service";
import { UsersService } from "./services/users.service";

import { AccountGQL } from "./gql/account.query";
import { AccountsGQL } from "./gql/accounts.query";
import { ProjectGQL } from "./gql/project.query";
import { ProjectsGQL } from "./gql/projects.query";
import { ProjectsByAccountGQL } from "./gql/projects-by-account.query";
import { CustomerGQL } from "./gql/customer.query";
import { CustomersGQL } from "./gql/customers.query";
import { CustomersByAccountGQL } from "./gql/customers-by-account.query";
import { TeamGQL } from "./gql/team.query";
import { TeamsByAccountGQL } from "./gql/teams-by-account.query";
import { TeamsGQL } from "./gql/teams.query";
import { ResourcesGQL } from "./gql/resources.query";
import { ResourceGQL } from "./gql/resource.query";
import { ResourcesByAccountGQL } from "./gql/resources-by-account.query";
import { ResourcesByTeamGQL } from "./gql/resources-by-team.query";
import { CustomerCreateComponent } from "./components/customer-create/customer-create.component";

@NgModule({
  declarations: [
    DashboardComponent,
    GanttComponent,
    ResourceVisualComponent,
    TravelVisualComponent,
    AccountListComponent,
    AccountCreateComponent,
    AccountDetailComponent,
    AssignmentListComponent,
    AssignmentDetailComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    DictionaryListComponent,
    DictionaryDetailComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    TeamListComponent,
    TeamDetailComponent,
    TaskListComponent,
    TaskDetailComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    UserListComponent,
    UserDetailComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    EffectusRoutingModule,
    D3Module,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountsService,
    ProjectsService,
    CustomersService,
    TeamsService,
    ResourcesService,
    TasksService, 
    UsersService,
    AccountGQL,
    AccountsGQL,
    ProjectGQL,
    ProjectsGQL,
    ProjectsByAccountGQL,
    CustomerGQL,
    CustomersGQL,
    CustomersByAccountGQL,
    TeamGQL,
    TeamsGQL,
    TeamsByAccountGQL,
    ResourceGQL,
    ResourcesGQL,
    ResourcesByAccountGQL,
    ResourcesByTeamGQL
  ],
  exports: []
})
export class EffectusModule {}
