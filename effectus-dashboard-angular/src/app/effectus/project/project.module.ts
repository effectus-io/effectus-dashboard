import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [ProjectDetailComponent, ProjectsComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
