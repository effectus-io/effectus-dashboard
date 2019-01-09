import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Dictionary } from "../entity/dictionary.entity";
import { DictionariesGQL } from "../query/dictionaries.query";

@Component({
  selector: "app-dictionary-list",
  templateUrl: "./dictionary-list.component.html",
  styleUrls: ["./dictionary-list.component.scss"]
})
export class DictionaryListComponent implements OnInit {
  dictionaries: Observable<Dictionary[]>;

  constructor(private dictionariesGQL: DictionariesGQL) {}

  ngOnInit() {
    this.dictionaries = this.dictionariesGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.dictionaries));
  }
}
