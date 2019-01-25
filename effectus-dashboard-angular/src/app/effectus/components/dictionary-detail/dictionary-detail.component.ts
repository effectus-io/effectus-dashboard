import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

import { Dictionary } from "../../entity/dictionary.entity";
import { DictionaryGQL } from "../../gql/dictionary.query";

@Component({
  selector: "app-dictionary-detail",
  templateUrl: "./dictionary-detail.component.html",
  styleUrls: ["./dictionary-detail.component.scss"]
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Observable<Dictionary>;

  constructor(
    private dictionaryGQL: DictionaryGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dictionary = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.dictionaryGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.dictionary));
      })
    );
  }
}
