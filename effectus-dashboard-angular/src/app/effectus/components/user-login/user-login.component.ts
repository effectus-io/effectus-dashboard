import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"]
})
export class UserLoginComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
