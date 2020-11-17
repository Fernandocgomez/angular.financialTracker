import { LoadTransactionAction } from './../../store/actions/transactions.actions';
import { AddTransactionAction, DeleteTransactionAction } from '../../store/actions/transactions.actions';
import { Transaction } from './../../interfaces/transaction.model';
import { Observable } from 'rxjs';
import { AppState } from './../../interfaces/app-state.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.scss']
})
export class DadComponent implements OnInit {

  public transactions$: Observable<Array<Transaction>>
  public loading$: Observable<Boolean>;
  public error$: Observable<Error>;

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    this.transactions$ = this.store.select(store => store.transaction.transactions);
    this.loading$ = this.store.select(store => store.transaction.loading);
    this.error$ = this.store.select(store => store.transaction.error);

    this.store.dispatch(new LoadTransactionAction({category: "dad", userId: localStorage.getItem("userId")}))
  }


}
