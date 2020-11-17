import {  TransactionState } from './transaction.model';

export interface AppState {
    readonly transaction: TransactionState
}