import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { EffectusRoutingModule } from '../effectus-routing.module';

@NgModule({
  declarations: [AssignmentDetailComponent, AssignmentsComponent],
  imports: [CommonModule, EffectusRoutingModule],
})
export class AssignmentModule { }
