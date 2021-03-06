import { SignUp } from './../../interfaces/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
      this.userService.signUp(this.email, this.password).subscribe((user: SignUp) => {
        localStorage.setItem("userId", user.userId);
        this.showErrorMessage = false;
        this.router.navigate(['/login'])
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
