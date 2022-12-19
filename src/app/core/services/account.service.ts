import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { AppConstant } from 'src/app/shared/constants/app.constant';
import { Account } from 'src/app/shared/models/account.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

    private _loading$ = new BehaviorSubject<boolean>(false);
    private _accounts$ = new BehaviorSubject<Account[]>([]);

    private lastTimeLoaded = 0;

    constructor(private http: HttpClient){}

    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    get accounts$(): Observable<Account[]>{
        return this._accounts$.asObservable();
    }

    loadAccounts(): void {
        if(this.canReload()) {return;}

        this.setLoadingStatus(true);
        this.http.get<Account[]>(`${environment.apiUrl}/${environment.get_accounts}`).pipe(
            tap(accounts => {
                this.lastTimeLoaded = Date.now();
                this._accounts$.next(accounts);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }

    getAccountById(id: number): Observable<Account>{
        this.loadAccounts();
    
        return this._accounts$.pipe(
            map(accounts => accounts.filter(account => account.id === id)[0])
        );
    }

    getFavoriteAccounts(): Observable<Account[]>{
        this.loadAccounts();

        return this._accounts$.pipe(
            map(accounts => accounts.slice(0,2))
        )
    }

    private canReload(): boolean {
        return Date.now() - this.lastTimeLoaded <= AppConstant.DELAY_RELOAD
    }

    private setLoadingStatus(loading: boolean) {
        this._loading$.next(loading);
    }
}