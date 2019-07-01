import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrderOnService(order) {
    return this.http.post('http://localhost:3000/api/order/order', order);
  }
}
