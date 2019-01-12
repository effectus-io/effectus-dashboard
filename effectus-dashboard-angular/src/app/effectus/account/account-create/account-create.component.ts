import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CreateAccountGQL } from "../gql/account.mutation";

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.scss"]
})
export class AccountCreateComponent implements OnInit {
  accountForm = new FormGroup({
    name: new FormControl("")
  });

  constructor(private createAccountGQL: CreateAccountGQL) {}

  ngOnInit() {}

  onSubmit() {
    const result: Account = Object.assign({}, this.accountForm.value);
    console.warn(result);
    this.createAccountGQL
    .mutate({
      name: result.name,
    }).subscribe(account => console.log(account)); 
   }
}
