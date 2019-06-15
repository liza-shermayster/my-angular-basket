import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { BasketService } from './basket.service';
import { Location } from '@angular/common';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = null;
  constructor(private authService: AuthService, private router: Router, private basketUpdate: BasketService) {
    this.authService.getUserData().subscribe(user => {
      this.user = user;
    });
  }
  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/menu']);
    this.basketUpdate.resetOrder();

  }

}
