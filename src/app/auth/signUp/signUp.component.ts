import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private authService: AuthService, private toastr: ToastrService, private location: Location) { }

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
      }, err => {
        console.error(err);
        this.toastr.error('Authentication failed');
      });
  }
}
