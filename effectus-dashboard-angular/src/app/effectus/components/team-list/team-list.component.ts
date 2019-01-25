import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";

import { Team } from "../../entity/team.entity";
import { TeamsService } from "../../services/teams.service";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"]
})
export class TeamListComponent implements OnInit {
  @Input("account") account: String;
  teams: Observable<Team[]>;

  constructor(private data: TeamsService) {}

  ngOnInit() {
    this.teams = this.data.getTeamsByAccount(this.account);
  }
}
