import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { TeamGQL } from "../gql/team.query";
import { TeamsGQL } from "../gql/teams.query";
import { Team } from "../entity/team.entity";
import { TeamsByAccountGQL } from "../gql/teams-by-account.query";

@Injectable({
  providedIn: "root"
})
export class TeamsService {
  constructor(
    private team: TeamGQL,
    private teams: TeamsGQL,
    private teamsByAccount: TeamsByAccountGQL
  ) {}

  getTeam(key: String): Observable<Team> {
    return this.team
      .watch({ key: key })
      .valueChanges.pipe(map(result => result.data.team));
  }

  getTeams(): Observable<Team[]> {
    return this.teams
      .watch()
      .valueChanges.pipe(map(result => result.data.teams));
  }

  getTeamsByAccount(key: String): Observable<Team[]> {
    return this.teamsByAccount
      .watch({account: key})
      .valueChanges.pipe(map(result => result.data.teamsByAccount));
  }
}
