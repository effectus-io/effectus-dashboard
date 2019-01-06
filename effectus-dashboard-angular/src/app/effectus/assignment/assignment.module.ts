import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { EffectusRoutingModule } from '../effectus-routing.module';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AssignmentGQL } from './query/assignment.query';
import { AssignmentsGQL } from './query/assignments.query';

@NgModule({
  declarations: [AssignmentDetailComponent, AssignmentListComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [AssignmentGQL, AssignmentsGQL]
})
export class AssignmentModule { }
