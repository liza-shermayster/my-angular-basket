
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService, private location: Location) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage() {
    return this.loginForm.controls.email.hasError('required') ? ' Please enter your email' :
      this.loginForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  onLogin() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(() => {
        this.location.back();
      }, err => {
        console.warn(err);
        this.toastr.error('Login failed');
      });
  }
}
