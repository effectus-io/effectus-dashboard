import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Team } from "../entity/team.entity";
import { TeamsGQL } from "../query/teams.query";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"]
})
export class TeamListComponent implements OnInit {
  teams: Observable<Team[]>;

  constructor(private teamsGQL: TeamsGQL) {}

  ngOnInit() {
    this.teams = this.teamsGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.teams));
  }
}
