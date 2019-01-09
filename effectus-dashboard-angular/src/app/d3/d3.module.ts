import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { D3Service } from "./services/d3.service";
import { ZoomableDirective } from "./directives/zoomable.directive";

@NgModule({
  declarations: [ZoomableDirective],
  imports: [CommonModule],
  providers: [D3Service]
})
export class D3Module {}
