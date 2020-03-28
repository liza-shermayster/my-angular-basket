import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { AuthData } from './auth-data.model';




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
    return this.http.post('user/signup', authData)
      .pipe(
        tap(({ token }) => {
          this.token = token;
          localStorage.setItem('token', token);
          localStorage.setItem('user', email);
          this.userData = email;
          this.updateUser();
          this.updateToken();
        })
      );
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    return this.http.
      post<{ token: string, user: string }>
      ("user/login", authData)
      .pipe(
        tap(({ token, user }) => {
          this.token = token;
          localStorage.setItem('token', token);
          localStorage.setItem('user', user);
          this.userData = user;
          this.updateUser();
          this.updateToken();
        })
      );
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
