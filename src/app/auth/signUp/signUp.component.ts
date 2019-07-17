
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService, private location: Location) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),

    });
  }
  getErrorMessage() {
    return this.signUpForm.controls.email.hasError('required') ? ' Please enter your email' :
      this.signUpForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  onSignUp(signUpForm: FormGroup) {
    this.authService
      .createUser(this.signUpForm.value.email, this.signUpForm.value.password)
      .subscribe(response => {
        this.location.back();
        console.log(response);
      }, err => {
        console.error(err);
        this.toastr.error("Authentication failed");

        // this.signUpForm.controls.email.setErrors({ "emailExist"})
      });
  }
}
