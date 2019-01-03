import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [TeamDetailComponent, TeamsComponent],
  imports: [
    CommonModule
  ]
})
export class TeamModule { }
