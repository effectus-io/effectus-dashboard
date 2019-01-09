import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";
import { Dictionary } from "../entity/dictionary.entity";

export interface Response {
  dictionary: Dictionary;
}

@Injectable()
export class DictionaryGQL extends Query<Response> {
  document = gql`
    query dictionary($key: ID!) {
      dictionary(key: $key) {
        key
        account
        name
        value
      }
    }
  `;
}
