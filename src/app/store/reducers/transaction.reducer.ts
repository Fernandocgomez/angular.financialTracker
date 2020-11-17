import { TransactionState } from './../../interfaces/transaction.model';
import { TransactionAction } from '../actions/transactions.actions';
import { Transaction } from '../../interfaces/transaction.model';
import { TransactionActionTypes } from '../types/transaction.types';

const initialState: TransactionState = {
  transactions: [],
  loading: false, 
  error: undefined
}

export function TransactionReducer(
  state: TransactionState = initialState,
  action: TransactionAction
) {
  switch (action.type) {
    case TransactionActionTypes.LOAD_TRANSACTIONS:
      return {
        ...state, 
        loading: true,
      };
    case TransactionActionTypes.LOAD_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };
    case TransactionActionTypes.LOAD_TRANSACTIONS_FAILURE:
      return {
        ...state, 
        error: action.payload,
        loading: false
      };
    
    default:
      return state;
  }
}
