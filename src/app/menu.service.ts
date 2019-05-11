import { Injectable } from '@angular/core';
import { Menu, Basket } from './menu';
import { of } from 'rxjs/internal/observable/of';
import { from } from 'rxjs/internal/observable/from';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private htttp: HttpClient) { }

  // getMenuData() {
  //   return this.htttp.get('http://localhost:3000/api/menu');
  // }
}

