import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountModule } from "./account/account.module";
import { EffectusRoutingModule } from "./effectus-routing.module";
import { ResourceModule } from "./resource/resource.module";
import { AssignmentModule } from "./assignment/assignment.module";
import { TaskModule } from "./task/task.module";
import { CustomerModule } from "./customer/customer.module";
import { TeamModule } from "./team/team.module";
import { UserModule } from "./user/user.module";
import { ProjectModule } from "./project/project.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    EffectusRoutingModule,
    AccountModule,
    ResourceModule,
    AssignmentModule,
    TaskModule,
    CustomerModule,
    ProjectModule,
    TeamModule,
    UserModule
  ],
  exports: []
})
export class EffectusModule {}
