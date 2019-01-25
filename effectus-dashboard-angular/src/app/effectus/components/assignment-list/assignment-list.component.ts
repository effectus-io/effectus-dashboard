import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Assignment } from '../../entity/assignment';
import { AssignmentsService } from '../../services/assignments.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {

  assignments: Observable<Assignment[]>;

  constructor(private data: AssignmentsService) {}

  ngOnInit() {
    this.assignments = this.data.getAssignments();
  }

}
