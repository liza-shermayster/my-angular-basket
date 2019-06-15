
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  templateUrl: './singUp.component.html',
  styleUrls: ['./singUp.component.css'],
})
export class SingUpComponent implements OnInit {
  singUpForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService, private location: Location) { }

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
    this.authService
      .createUser(this.singUpForm.value.email, this.singUpForm.value.password)
      .subscribe(response => {
        this.location.back();
        console.log(response);
      }, err => {
        console.error(err);
        this.toastr.error("Authentication failed");

        // this.singUpForm.controls.email.setErrors({ "emailExist"})
      });;
  }
}
