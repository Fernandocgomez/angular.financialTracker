// Angular Modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// Interfaces
import { Login } from './../../interfaces/user';
// Services
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Hold the input data
  public email: string;
  public password: string;

  // Validate the user input
  public isEmailValid: boolean = false;
  public isPasswordValid: boolean = false;

  // Error messages handeling
  public showErrorMessage: boolean = false;
  public errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Validate the user credentials with the server
   * if the credentials are valid the user gets redirected to the dashboard page
   * if the credentials are wrong the user gets promoted with an error message
   * @return {void}
   */
  public onClick(): void {
    if (this.isEmailValid && this.isPasswordValid) {
      this.userService.login(this.email, this.password).subscribe(
        (user: Login) => {
          localStorage.setItem('token', user.token);
          this.showErrorMessage = false;
          this.router.navigate(['/dashboard']);
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
