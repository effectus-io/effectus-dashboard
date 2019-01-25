import { Location } from "./location.entity";

export class Travel  {
  constructor(public source: Location, public target: Location) {}
}
