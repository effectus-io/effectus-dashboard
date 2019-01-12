import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamDetailComponent } from "./team-detail/team-detail.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamsGQL } from "./query/teams.query";
import { EffectusRoutingModule } from "../effectus-routing.module";
import { TeamGQL } from "./query/team.query";
import { ResourcesByTeamGQL } from "../resource/query/resources-by-team.query";

@NgModule({
  declarations: [TeamDetailComponent, TeamListComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [TeamsGQL, TeamGQL, ResourcesByTeamGQL]
})
export class TeamModule {}
