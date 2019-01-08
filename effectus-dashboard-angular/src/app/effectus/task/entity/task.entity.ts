export interface Task {
  key: string;
  account: string;
  project: string;
  customer: string;
  location: Location;
}

export interface Location {
  longitude: number;
  latitude: number;
}
