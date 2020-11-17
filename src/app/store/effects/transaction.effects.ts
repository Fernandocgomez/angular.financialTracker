import { LoadTransactionSuccessAction, LoadTransactionFailureAction } from './../actions/transactions.actions';
import { TransactionActionTypes } from './../types/transaction.types';
import { TransactionService } from './../../services/transaction.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { LoadTransactionAction } from '../actions/transactions.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TransactionEffects {
    @Effect() loadTransactionByCategory$ = this.actions$
        .pipe(ofType<LoadTransactionAction>(TransactionActionTypes.LOAD_TRANSACTIONS),
        mergeMap(
            (data) => this.transactionService.getTransactionByCategory(data.payload)
            .pipe(
                map(data => new LoadTransactionSuccessAction(data)),
                catchError(error => of(new LoadTransactionFailureAction(error))
                )
            )
        )
        )

    constructor(private actions$: Actions, private transactionService: TransactionService) {}
}
