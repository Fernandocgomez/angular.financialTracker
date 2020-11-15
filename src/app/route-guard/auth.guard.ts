// Angular Modules
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// Rxjs Modules
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Services
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService) {}

  /**
 * Take the response from the server about the status of the token
 * if the response if true the user get access to any of the pages on the site
 * if the response is false the user get redirect to the login page
 * @return {Observable<boolean>}
 */
  canActivate(): Observable<boolean> {
    return this.authService.isAuth().pipe(
      map((boolean) => {
        if (boolean) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
