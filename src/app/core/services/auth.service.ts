import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logged$ = new BehaviorSubject<boolean>(false); //

  get logged$(): Observable<boolean>{
    return this._logged$.asObservable();
  }

  login(): void{
    this.setLoggingStatus(true);
  }

  logout(): void {
    this.setLoggingStatus(false);
  }

  private setLoggingStatus(status: boolean){
    this._logged$.next(status);
  }
}
