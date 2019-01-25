import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { Team } from "../../entity/team.entity";
import { ActivatedRoute } from "@angular/router";
import { TeamGQL } from "../../gql/team.query";
import { Resource } from "../../entity/resource.entity";
import { ResourcesByTeamGQL } from "../../gql/resources-by-team.query";
import { TeamsService } from "../../services/teams.service";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.component.html",
  styleUrls: ["./team-detail.component.scss"]
})
export class TeamDetailComponent implements OnInit {
  team: Observable<Team>;
  resources: Observable<Resource[]>;

  constructor(
    private data: TeamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params['key'];
      this.team = this.data.getTeam(key);
    });
  }
}
