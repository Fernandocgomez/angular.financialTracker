// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Rxjs Modules
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaycheckService {

  constructor(private http: HttpClient) { }

  /**
 * 
 * @return {Observable<any>}
 */
  public getMyPaycheck(paycheckId: string):Observable<any> {
    return 
  }
}
