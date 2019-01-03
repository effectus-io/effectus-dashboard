import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [ResourceDetailComponent, ResourcesComponent],
  imports: [
    CommonModule
  ]
})
export class ResourceModule { }
