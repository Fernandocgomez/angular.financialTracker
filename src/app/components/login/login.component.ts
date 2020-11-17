// Angular Modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// Interfaces
import { Login } from '../../interfaces/user.model';
// Services
import { UserService } from './../../services/user.service';
// Helpers
import { UserHelper } from 'src/app/helpers/user.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends UserHelper implements OnInit{

  constructor(public userService: UserService, public router: Router ) {
    super(userService, router);
  }

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
          localStorage.setItem('userId', user.userId);
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
}
