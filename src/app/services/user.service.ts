import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : String = 'https://jsonplaceholder.cypress.io//';
  constructor(private http : HttpClient) { }
  listUsers(){
    return this.http.get(this.baseUrl + 'users');
  }
}
