import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { Team } from "../entity/team.entity";
import { ActivatedRoute } from "@angular/router";
import { TeamGQL } from "../query/team.query";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.component.html",
  styleUrls: ["./team-detail.component.scss"]
})
export class TeamDetailComponent implements OnInit {
  team: Observable<Team>;

  constructor(private teamGQL: TeamGQL, private route: ActivatedRoute) {}

  ngOnInit() {
    this.team = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.teamGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.team));
      })
    );
  }
}
