// Angular Modules
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
// Rxjs Modules
import { Observable, Subject } from 'rxjs';
// Interfaces
import { ValidToken } from './../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseURL: string = 'http://localhost:4545/';

  /**
 * check with the server if the token provided is valid
 * @return {Observable<boolean>}
 */
  public isAuth(): Observable<boolean> {
    let subject: Subject<boolean> = new Subject<boolean>();
    if (this.tokenExist()) {
      this.validateToken().subscribe(
        (data: ValidToken) => {
          if (data.status === 200) {
            subject.next(true);
          } else {
            subject.next(false);
          }
        },
        (error: HttpErrorResponse) => {
          subject.next(false);
        }
      );
      return subject.asObservable();
    } else {
      subject.next(false);
      return subject.asObservable();
    }
  }

  /**
 * check if a token exist on the user localStorage
 * @return {boolean}
 */
  private tokenExist(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
 * make a post request to the server to validate the token
 * @return {Observable<ValidToken>}
 */
  private validateToken(): Observable<ValidToken> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const headers: object = {
      headers: new HttpHeaders(headersConfig),
    };
    return this.http.post<ValidToken>(
      this.baseURL + 'users/validate-token',
      null,
      headers
    );
  }
}
