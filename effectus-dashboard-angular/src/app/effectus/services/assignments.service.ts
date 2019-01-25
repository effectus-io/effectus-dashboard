import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AssignmentGQL } from "../gql/assignment.query";
import { AssignmentsGQL } from "../gql/assignments.query";
import { Assignment } from "../entity/assignment";

@Injectable({
  providedIn: "root"
})
export class AssignmentsService {
  constructor(
    private assignment: AssignmentGQL,
    private assignments: AssignmentsGQL
  ) {}

  getAssignment(key: string): Observable<Assignment> {
    return this.assignment
      .watch({ key: key })
      .valueChanges.pipe(map(result => result.data.assignment));
  }

  getAssignments() : Observable<Assignment[]> {
    return this.assignments
    .watch()
    .valueChanges.pipe(map(result => result.data.assignments));
  }

}
