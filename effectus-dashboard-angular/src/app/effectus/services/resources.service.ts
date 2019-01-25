import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Resource } from "../entity/resource.entity";
import { ResourceGQL } from "../gql/resource.query";
import { ResourcesGQL } from "../gql/resources.query";
import { ResourcesByAccountGQL } from "../gql/resources-by-account.query";
import { ResourcesByTeamGQL } from "../gql/resources-by-team.query";

@Injectable({
  providedIn: "root"
})
export class ResourcesService {
  constructor(
    private resource: ResourceGQL,
    private resources: ResourcesGQL,
    private resourcesByAccount: ResourcesByAccountGQL,
    private resourcesByTeam : ResourcesByTeamGQL
  ) {}

  getResource(key: String): Observable<Resource> {
    return this.resource
      .watch({ key: key })
      .valueChanges.pipe(map(result => result.data.resource));
  }

  getResources(): Observable<Resource[]> {
    return this.resources
      .watch()
      .valueChanges.pipe(map(result => result.data.resources));
  }

  getResourcesByAccount(account: String): Observable<Resource[]> {
    return this.resourcesByAccount
      .watch({ account: account })
      .valueChanges.pipe(map(result => result.data.resourcesByAccount));
  }

  getResourcesByTeam(team: String): Observable<Resource[]> {
    return this.resourcesByTeam
      .watch({ team: team })
      .valueChanges.pipe(map(result => result.data.resourcesByTeam));
  }

}
