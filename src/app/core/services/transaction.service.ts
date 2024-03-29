import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { Account } from 'src/app/shared/models/account.model';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _loading$ = new BehaviorSubject<boolean>(false);
  private _transactions$ = new BehaviorSubject<Transaction[]>([]);

  private accountId!: number;
  private username: string | null = '';
  private lastTimeLoaded = 0;

  constructor(private http: HttpClient) {}

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  get transaction$(): Observable<Transaction[]> {
    return this._transactions$.asObservable();
  }

  loadTransactions(accountId: number): void{
    if(!this.canReload(accountId)) {return;}

    this.setLoadingStatus(true);
    this.http.get<Transaction[]>(`${environment.API_URL}/${environment.ACCOUNTS}/${accountId}/${environment.TRANSACTIONS}`).pipe(
      tap(transactions => {
        this.lastTimeLoaded = Date.now();
        transactions.reverse();
        this._transactions$.next(transactions);
        this.setLoadingStatus(false);
      })
    ).subscribe();
  }

  getTransactionById(accountId: number, transactionId: number): Observable<Transaction>{
    this.loadTransactions(accountId);
    
    return this._transactions$.pipe(
      map(transactions => transactions.filter(transaction => transaction.id === transactionId)[0])
    );
  }

  postTransaction(form: {amount: number, valueDate: Date, account: Account}): Observable<boolean>{
    let newTransaction: Transaction = {
      id: 0, //must be compute in backend
      executionDate: new Date().toISOString(),
      valueDate: form.valueDate.toISOString(),
      withdraw: form.amount,
      payment: null,
      wording: `VIR SEPA transaction of ${form.amount} euros made from app`,
      balance: 0, //must be compute in backend
      account: form.account 
    }

    return this.http.post(`${environment.API_URL}/${environment.TRANSACTIONS}`, newTransaction).pipe(
      map(() => true),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    )
  }

  private canReload(accountId: number): boolean{
    const username = window.sessionStorage.getItem(AppConstant.SESSION_STORAGE_CONNECTED_USER_KEY);
    if(this.username !== username){
      this.username = username;
      return true;
    }
    
    if(this.accountId !== accountId){
      this.accountId = accountId;
      return true;
    }

    return Date.now() - this.lastTimeLoaded >= AppConstant.DELAY_RELOAD
  }

  private setLoadingStatus(loading: boolean) {
    this._loading$.next(loading);
  }
}
