// Angular Module
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// Services
import { UserService } from './../../services/user.service';
// Interfaces
import { SignUp } from './../../interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  
  // Holds the input data
  public email: string;
  public password: string;
  
  // Validates the user input 
  public isEmailValid: boolean = false;
  public isPasswordValid: boolean = false;

  // Error messages handeling
  public showErrorMessage: boolean = false;
  public errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Create a new  user
   * if the credentials are valid the user gets redirected to the login page
   * if the credentials are wrong the user gets promoted with an error message
   * @return {void}
   */
  public onClick(): void {
    if (this.isEmailValid && this.isPasswordValid) {
      this.userService.signUp(this.email, this.password).subscribe(
        (user: SignUp) => {
          localStorage.setItem('userId', user.userId);
          this.showErrorMessage = false;
          this.router.navigate(['/login']);
        },
        (error: HttpErrorResponse) => {
          this.errorMessage =
            error.error.message ||
            'There was an error proccesing your request.';
          this.showErrorMessage = true;
        }
      );
    }
  }

  /**
   * using a regular expersion it validates if the user emial is valid
   * @param {emial: string}
   * @return {void}
   */
  public validateEmail(email: string): void {
    const regEx: RegExp = /\S+@\S+\.\S+/;
    if (regEx.test(email)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }

  /**
   * using a regular expersion it validates if the user password is valid
   * @param {password: string}
   * @return {void}
   */
  public validatePassword(password: string): void {
    const regEx: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    if (regEx.test(password)) {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
  }
}
