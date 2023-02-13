import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://randomuser.me/api/';

  getRandomUsers() {
    return this.http.get(this.apiUrl+'?results=20');
  }

  searchUser() {

  }
}
