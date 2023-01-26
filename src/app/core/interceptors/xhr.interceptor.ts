import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConstant } from "src/app/shared/constants/app.constant";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let headers = new HttpHeaders();

    /* Add Authorization headers for authentication: 
     * Uses the credentials given by the users for 
     * connection process. After that, the credentials
     * are removed from session storage.
    */
    const credentials = window.sessionStorage.getItem(AppConstant.SESSION_STORAGE_CREDENTIALS_KEY);
    const login = credentials ? JSON.parse(credentials) : null;
    if(login){
      headers = headers.append('Authorization', `Basic ${btoa(`${login.username}:${login.password}`)}`);
    }

    // 
    /* Add Authorization headers:
     * Used when credentials are valid.
     * The credentials are removed from session storage and
     * the app uses the jwt token given by the backend instead.
    */
    const authorization = sessionStorage.getItem(AppConstant.SESSION_STORAGE_JWT_TOKEN_KEY);
    if(authorization){
      headers = headers.append('Authorization', authorization);  
    }

    // 
    /* Add X-XSRF-TOKEN headers for CSRF protection:
     * Pour l'instant le header X-XSRF-TOKEN est 'undefined'
     * L'application n'arrive pas a recuperer les cookies fournit
     * pas spring (peut-etre un probleme avec l'atribut 'sameSite'), 
     * on ne peut donc pas renvoyer le token CSRF vers l'application backend.
     * La configuration CSRF est desactivé dans spring.
    */
    let xsrf = sessionStorage.getItem(AppConstant.SESSION_STORAGE_CSRF_KEY);
    if(xsrf){
      headers = headers.append('X-XSRF-TOKEN', xsrf);  
    }

    // Add XHR headers to get datas in response
    headers = headers.append('X-Requested-With', 'XMLHttpRequest');

    const xhr = req.clone({
      headers: headers
    });
    return next.handle(xhr);
  }
}