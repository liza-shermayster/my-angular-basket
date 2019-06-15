import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';




@Injectable({ providedIn: 'root' })

export class AuthService {
  private userData;
  private token;
  private userSubject = new BehaviorSubject('');
  private tokenSubject = new BehaviorSubject('');



  constructor(private http: HttpClient) {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      this.token = localStorage.getItem('token');
      this.userData = localStorage.getItem('user');
      this.updateUser();
    }
  }

  getToken() {
    return this.userData;
  }

  createUser(email: string, password: string): Observable<any> {
    const authData: AuthData = { email: email, password: password };
    return this.http.post('http://localhost:3000/api/user/singup', authData)
      .pipe(
        tap(({ token }) => {
          this.token = token;
          localStorage.setItem('token', token);
          localStorage.setItem('user', email);
          this.userData = email;
          console.log("this.userData", this.userData);
          this.updateUser();
          this.updateToken();
        })
      );
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    return this.http.
      post<{ token: string, user: string }>
      ("http://localhost:3000/api/user/login", authData)
      .pipe(
        tap(({ token, user }) => {
          this.token = token;
          localStorage.setItem('token', token);
          localStorage.setItem('user', user);
          this.userData = user;
          console.log("this.userData", this.userData);
          this.updateUser();
          this.updateToken();
        })
      )
  }
  updateUser() {
    this.userSubject.next(this.userData);
  }

  getUserData() {
    return this.userSubject.asObservable();
  }

  updateToken() {
    this.tokenSubject.next(this.token);
  }
  getTokenSubject() {
    return this.tokenSubject.asObservable();
  }

  logOut() {
    this.token = null;
    this.updateToken();
    this.userData = null;
    this.updateUser();
    localStorage.clear();
  }

}
