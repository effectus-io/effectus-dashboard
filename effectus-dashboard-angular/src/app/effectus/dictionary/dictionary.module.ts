import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DictionaryListComponent } from "./dictionary-list/dictionary-list.component";
import { DictionaryDetailComponent } from "./dictionary-detail/dictionary-detail.component";

@NgModule({
  declarations: [DictionaryListComponent, DictionaryDetailComponent],
  imports: [CommonModule],
  providers: []
})
export class DictionaryModule {}
