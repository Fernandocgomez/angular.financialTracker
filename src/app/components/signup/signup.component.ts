// Angular Module
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// Services
import { UserService } from './../../services/user.service';
// Interfaces
import { SignUp } from './../../interfaces/user';
// Helpers
import { UserHelper } from 'src/app/helper/user.helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends UserHelper implements OnInit {

  constructor(public userService: UserService, public router: Router) {
    super(userService, router);
  }

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
}
