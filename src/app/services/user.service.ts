// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Rxjs Modules
import { Observable } from 'rxjs';
// Interfaces
import { Login } from './../interfaces/user';
import { SignUp } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:4545/"

  constructor(private http: HttpClient) { }

  /**
 * send a post request to the server with the user credentials to signup
 * @param {email: string, password: string}
 * @return {Observable<SignUp>}
 */
  public signUp(email: string, password: string):Observable<SignUp> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<SignUp>(this.baseURL + "users/signup", body);
  }

  /**
 * send a post request to the server with the user credentials to login
 * @param {email: string, password: string}
 * @return {Observable<Login>}
 */
  public login(email: string, password: string): Observable<Login> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<Login>(this.baseURL + "users/login", body);
  }
}
