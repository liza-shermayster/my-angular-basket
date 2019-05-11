
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  singUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.singUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),

    });
  }

  getErrorMessage() {
    return this.singUpForm.controls.email.hasError('required') ? ' Please enter your email' :
      this.singUpForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  onSubmit() {
    console.log(this.singUpForm.value);
    console.log(this.singUpForm.value.email)

  }
}
