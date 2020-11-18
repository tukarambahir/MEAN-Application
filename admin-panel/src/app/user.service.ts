import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:4000/user'

  constructor(
    private httpClient: HttpClient) { }

  getUsers() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    
    return this.httpClient.get(this.url, httpOptions)
  }

  toggleActiveStatus(user) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    // suspend user if already active or activate otherwise
    const body = {
      status: user['IsActive'] == 1 ? 0 : 1
    }

    return this.httpClient.put(this.url + "/toggle-active/" + user['UserId'], body, httpOptions)
  }
}
