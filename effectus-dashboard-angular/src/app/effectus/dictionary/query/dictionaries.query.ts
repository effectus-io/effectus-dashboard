import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Dictionary } from "../entity/dictionary.entity";

export interface Response {
  dictionaries: Dictionary[];
}

@Injectable()
export class DictionariesGQL extends Query<Response> {
  document = gql`
    query dictionaries($offset: Int) {
      dictionaries(offset: $offset, first: 10) {
        key
        name
      }
    }
  `;
}
