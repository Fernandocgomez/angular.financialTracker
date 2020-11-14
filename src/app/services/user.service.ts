import { Login } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:4545/"

  constructor(private http: HttpClient) { }

  public signUp(email: string, password: string):Observable<SignUp> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<SignUp>(this.baseURL + "users/signup", body);
  }

  public login(email: string, password: string): Observable<Login> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<Login>(this.baseURL + "users/login", body);
  }
}
