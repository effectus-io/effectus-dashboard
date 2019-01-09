import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DictionaryListComponent } from "./dictionary-list/dictionary-list.component";
import { DictionaryDetailComponent } from "./dictionary-detail/dictionary-detail.component";
import { EffectusRoutingModule } from "../effectus-routing.module";
import { DictionariesGQL } from "./query/dictionaries.query";
import { DictionaryGQL } from "./query/dictionary.query";

@NgModule({
  declarations: [DictionaryListComponent, DictionaryDetailComponent],
  imports: [CommonModule, EffectusRoutingModule],
  providers: [DictionariesGQL, DictionaryGQL]
})
export class DictionaryModule {}
