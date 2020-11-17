import { Transaction, TransactionsByCategoryBody } from './../interfaces/transaction.model';
import { HttpHeaders } from '@angular/common/http';
// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Rxjs Modules
import { Observable } from 'rxjs';
// Interfaces

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

  private baseURL = 'http://localhost:4545/';

  constructor(private http: HttpClient) {}

  /**
   * Get all the transactions by category
   * @param {category: string, userId: string}
   * @return {Observable<Transaction>}
   */

  getTransactionByCategory(body: TransactionsByCategoryBody): Observable<Transaction[]> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const headers: object = {
      headers: new HttpHeaders(headersConfig),
    };

    return this.http.post<Array<Transaction>>(
      this.baseURL + 'transactions/my-transactions-by-category',
      body,
      headers
    );
  }
}
