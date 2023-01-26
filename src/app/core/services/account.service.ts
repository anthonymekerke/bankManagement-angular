import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { AppConstant } from 'src/app/shared/constants/app.constant';
import { AccountType } from 'src/app/shared/enums/account-type.enum';
import { Account } from 'src/app/shared/models/account.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

    private _loading$ = new BehaviorSubject<boolean>(false);
    private _accounts$ = new BehaviorSubject<Account[]>([]);

    private username: string | null = '';
    private lastTimeLoaded = 0;

    constructor(private http: HttpClient){}

    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    get accounts$(): Observable<Account[]>{
        return this._accounts$.asObservable();
    }

    loadAccounts(newTransaction?: true): void {
        if(!this.canReload(newTransaction)) {return;}

        this.setLoadingStatus(true);
        this.http.get<Account[]>(`${environment.API_URL}/${environment.ACCOUNTS}`).pipe(
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

    getAccountTypedById(id: number): Observable<Account>{
        this.loadAccounts();

        return this._accounts$.pipe(
            map(accounts => accounts.find(account => account.id === id)?.accountType),
            switchMap(type => {
                if(type === AccountType.CURRENT_ACCOUNT){
                    return this.http.get<Account>(`${environment.API_URL}/${environment.CURRENT_ACCOUNTS}/${id}`)
                }else{
                    return this.http.get<Account>(`${environment.API_URL}/${environment.SAVING_ACCOUNTS}/${id}`)
                }
            })
        )       
    }

    getFavoriteAccounts(): Observable<Account[]>{
        this.loadAccounts();

        return this._accounts$.pipe(
            map(accounts => accounts.slice(0,2))
        )
    }

    private canReload(newTransaction?: true): boolean {
        if(newTransaction){return true;}

        const username = window.sessionStorage.getItem(AppConstant.SESSION_STORAGE_CONNECTED_USER_KEY);
        if(this.username !== username){
        this.username = username;
        return true;
        }

        return Date.now() - this.lastTimeLoaded >= AppConstant.DELAY_RELOAD
    }

    private setLoadingStatus(loading: boolean) {
        this._loading$.next(loading);
    }
}
