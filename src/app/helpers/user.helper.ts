// Angular Modules
import { Router } from '@angular/router';
// Services
import { UserService } from './../services/user.service';

export class UserHelper {
  // Holds the input data
  public email: string;
  public password: string;

  // Validates the user input
  public isEmailValid: boolean = false;
  public isPasswordValid: boolean = false;

  // Error messages handeling
  public showErrorMessage: boolean = false;
  public errorMessage: string = '';

  constructor(public userService: UserService, public router: Router) {
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
