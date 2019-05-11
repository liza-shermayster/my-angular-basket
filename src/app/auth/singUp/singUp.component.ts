
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './singUp.component.html',
  styleUrls: ["./singUp.component.css"],
})
export class SingUpComponent {
  singUpForm: FormGroup;

  constructor(public authService: AuthService) { }

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
  onSingUp(singUpForm: FormGroup) {

    // if (singUpForm.invalid) {
    //   return;
    // }
    this.authService.createUser(this.singUpForm.value.email, this.singUpForm.value.password);
    console.log('data of singUpCom-email', this.singUpForm.value);
    console.log('data of singUpCom-password', this.singUpForm.value.password);

  }
}
