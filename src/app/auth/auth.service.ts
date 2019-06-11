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
    return this.http.post('http://localhost:3000/api/user/singup', authData);
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
          this.updateUser();
        })
      )
  }
  updateUser() {
    this.userSubject.next(this.userData);
  }

  getUserData() {
    return this.userSubject.asObservable();
  }

}
