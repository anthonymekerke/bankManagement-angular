import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logged$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router,
    private http: HttpClient){}

  get logged$(): Observable<boolean>{
    return this._logged$.asObservable();
  }

  login(credentials: {username: string, password: string}){
    window.sessionStorage.setItem(AppConstant.SESSION_STORAGE_CREDENTIALS_KEY, JSON.stringify(credentials));

    this.http.get(`${environment.API_URL}/${environment.CLIENTS}`, { observe: 'response', withCredentials: true, responseType: 'json'})
    .subscribe({
      next: (res) => {

        window.sessionStorage.setItem(AppConstant.SESSION_STORAGE_CONNECTED_USER_KEY, credentials.username);

        let xsrf = this.getCookie(AppConstant.COOKIE_CSRF_KEY);
        window.sessionStorage.setItem(AppConstant.SESSION_STORAGE_CSRF_KEY, xsrf);

        let headers_authorization = res.headers.get('Authorization');
        if(headers_authorization){
          window.sessionStorage.setItem(AppConstant.SESSION_STORAGE_JWT_TOKEN_KEY, headers_authorization);
          window.sessionStorage.removeItem(AppConstant.SESSION_STORAGE_CREDENTIALS_KEY)
        }

        this.setLoggingStatus(true)
        this.router.navigateByUrl('/home')
      },
      error: (err) => this.handleError(err)
    });
  }

  logout(): void {
    this.setLoggingStatus(false);
    window.sessionStorage.clear();
  }

  private setLoggingStatus(status: boolean){
    this._logged$.next(status);
  }

  private handleError(error: HttpErrorResponse){
    /*
     * In general, occur when error with operators in client-side
     * In this case, CORS config error due to mock backend calls
     * For now, ignore it.
    */
    if (error.status === 0) {
      this.setLoggingStatus(true)
      this.router.navigateByUrl('/home')
      return;
    }

    // 'Unauthorized' error
    if(error.status === 401){
      window.alert('Bad credentials')
    }
  }

  /*
  * Create a dynamic object with the
  * document.cookie string.
  * In this case, the final object should
  * look like this:
  * cookie = {
  *    "JSESSIONID": "######",
  *    "XSRF-TOKEN": "######"
  * }
  */
  private getCookie(name: string) {
    console.log(document.cookie)// n'imprime rien!!! N'arrive pas a recuperer les cookies fournit pas spring

    let cookie: {[key: string]: any} = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }
}
