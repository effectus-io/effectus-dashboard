import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamDetailComponent } from "./team-detail/team-detail.component";
import { TeamListComponent } from "./team-list/team-list.component";

@NgModule({
  declarations: [TeamDetailComponent, TeamListComponent],
  imports: [CommonModule]
})
export class TeamModule {}
