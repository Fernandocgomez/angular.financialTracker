import { TransactionsByCategoryBody } from './../../interfaces/transaction.model';
// Ngrx modules
import { Action } from '@ngrx/store';
// Interfaces
import {
  Transaction,
  CreateTransactionResp,
  DeleteTransactionResp,
} from '../../interfaces/transaction.model';
// Types
import { TransactionActionTypes } from './../../store/types/transaction.types';

// Actions to load the transactions
export class LoadTransactionAction implements Action {
  readonly type = TransactionActionTypes.LOAD_TRANSACTIONS;

  constructor(public payload: TransactionsByCategoryBody) {}
}

export class LoadTransactionSuccessAction implements Action {
  readonly type = TransactionActionTypes.LOAD_TRANSACTIONS_SUCCESS;

  constructor(public payload: Array<Transaction>) {}
}

export class LoadTransactionFailureAction implements Action {
  readonly type = TransactionActionTypes.LOAD_TRANSACTIONS_FAILURE;

  constructor(public payload: Error) {}
}

// Actions to add a transaction
export class AddTransactionAction implements Action {
  readonly type = TransactionActionTypes.ADD_TRANSACTION;

  constructor(public payload: Transaction) {}
}

export class AddTransacionSuccessAction implements Action {
  readonly type = TransactionActionTypes.ADD_TRANSACTION_SUCCESS;

  constructor(public payload: CreateTransactionResp) {}
}

export class AddTransactionFailureAction implements Action {
  readonly type = TransactionActionTypes.ADD_TRANSACTION_FAILURE;

  constructor(public payload: Error) {}
}

// Actions to delete transactions
export class DeleteTransactionAction implements Action {
  readonly type = TransactionActionTypes.DELETE_TRANSACTION;

  constructor(public payload: string) {}
}

export class DeleteTransactionSuccessAction implements Action {
  readonly type = TransactionActionTypes.DELETE_TRANSACTION_SUCCESS;

  constructor(public payload: DeleteTransactionResp) {}
}

export class DeleteTransactionFailureAction implements Action {
  readonly type = TransactionActionTypes.ADD_TRANSACTION_FAILURE;

  constructor(public payload: Error) {}
}

export type TransactionAction =
  | LoadTransactionAction
  | LoadTransactionSuccessAction
  | LoadTransactionFailureAction
  | AddTransactionAction
  | AddTransacionSuccessAction
  | AddTransactionFailureAction
  | DeleteTransactionAction
  | DeleteTransactionSuccessAction
  | DeleteTransactionFailureAction
