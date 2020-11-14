import { Observable, Subject } from 'rxjs';
import { ValidToken } from './../interfaces/user';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseURL: string = 'http://localhost:4545/';

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

  private tokenExist(): boolean {
    return !!localStorage.getItem('token');
  }

  private validateToken() {
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
