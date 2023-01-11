import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _loading$ = new BehaviorSubject<boolean>(false);
  private _transactions$ = new BehaviorSubject<Transaction[]>([]);

  private accountId!: number;
  private lastTimeLoaded = 0;

  constructor(private http: HttpClient) {}

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  get transaction$(): Observable<Transaction[]> {
    return this._transactions$.asObservable();
  }

  loadTransactions(accountId: number): void{
    if(this.canReload(accountId)) {return;}

    this.setLoadingStatus(true);
    this.http.get<Transaction[]>(`${environment.apiUrl}/${environment.get_accounts_id_transactions}`).pipe(
      tap(transactions => {
        this.lastTimeLoaded = Date.now();
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

  private canReload(accountId: number): boolean{
    if(this.accountId !== accountId){
      this.accountId = accountId;
      return false;
    }
    return Date.now() - this.lastTimeLoaded <= AppConstant.DELAY_RELOAD
  }

  private setLoadingStatus(loading: boolean) {
    this._loading$.next(loading);
  }
}
