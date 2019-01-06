import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Assignment } from '../entity/assignment';
import { AssignmentsGQL } from '../query/assignments.query';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {

  assignments: Observable<Assignment[]>;

  constructor(private assignmentsGQL: AssignmentsGQL) {}

  ngOnInit() {
    this.assignments = this.assignmentsGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.assignments));
  }

}
