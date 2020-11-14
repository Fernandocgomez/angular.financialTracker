import { Login } from './../../interfaces/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public isEmailValid: boolean = false;
  public isPasswordValid: boolean = false;
  public showErrorMessage: boolean = false;
  public errorMessage: string = "";


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public onClick() {
    if (this.isEmailValid && this.isPasswordValid) {
      this.userService.login(this.email, this.password).subscribe((user: Login) => {
        localStorage.setItem("token", user.token);
        this.showErrorMessage = false;
        this.router.navigate(['/dashboard'])
      }, (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message || "There was an error proccesing your request.";
        this.showErrorMessage = true;
      })
      
    }
  }

  public validateEmail(email: string): void {
    const regEx: RegExp = /\S+@\S+\.\S+/;
    if (regEx.test(email)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }

  public validatePassword(password: string): void {
    const regEx: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    if (regEx.test(password)) {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
  }

}
