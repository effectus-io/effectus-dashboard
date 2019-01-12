import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

import { Account } from "../entity/account.entity";
import { Project } from "../../project/entity/project.entity";
import { Team } from "../../team/entity/team.entity";
import { ProjectsByAccountGQL } from "../../project/query/projects-by-account.query";
import { TeamsByAccountGQL } from "../../team/query/teams-by-account.query";
import { AccountGQL } from "../gql/account.query";

@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.scss"]
})
export class AccountDetailComponent implements OnInit {
  account: Observable<Account>;
  projects: Observable<Project[]>;
  teams: Observable<Team[]>;

  teamsSize: number;
  projectsSize: number;

  constructor(
    private accountGQL: AccountGQL,
    private projectsByAccountGQL: ProjectsByAccountGQL,
    private teamsByAccountGQL: TeamsByAccountGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.account = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.accountGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.account));
      })
    );

    this.account.subscribe(account => {
      console.log(account);

      this.projects = this.projectsByAccountGQL
        .watch({ account: account.key })
        .valueChanges.pipe(map(result => result.data.projectsByAccount));

      this.projects.subscribe(
        projects => (this.projectsSize = projects.length)
      );

      this.teams = this.teamsByAccountGQL
        .watch({ account: account.key })
        .valueChanges.pipe(map(result => result.data.teamsByAccount));

      this.teams.subscribe(teams => (this.teamsSize = teams.length));
    });
  }
}
