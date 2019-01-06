import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamDetailComponent } from "./team-detail/team-detail.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamsGQL } from "./query/teams.query";
import { EffectusRoutingModule } from "../effectus-routing.module";
import { TeamGQL } from "./query/team.query";

@NgModule({
  declarations: [TeamDetailComponent, TeamListComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [TeamsGQL, TeamGQL]
})
export class TeamModule {}
