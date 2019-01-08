export interface Customer {
  key: string;
  name: string;
  account: string;
  address: Address;
}

export interface Address {
  city: string;
  country: string;
  number: number;
  street: string;
}