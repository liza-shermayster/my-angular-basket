
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

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
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.email);
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(() => {
        this.router.navigate(['/order']);
      }, err => {
        console.warn(err);
      })
  }
}
