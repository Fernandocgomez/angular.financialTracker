import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, http: HttpClient) { }

  checkAuth() {
    if (localStorage.token) {
      console.log(localStorage.token)
    } else {
      this.router.navigate(["/signup"]);
    }
  }
}
