import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConstant } from "src/app/shared/constants/app.constant";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let headers = new HttpHeaders();

    const credentials = window.sessionStorage.getItem(AppConstant.SESSION_STORAGE_CREDENTIALS_KEY);
    const login = credentials ? JSON.parse(credentials) : null;

    if(login){
      headers = headers.append('Authorization', `Basic ${btoa(`${login.username}:${login.password}`)}`);
    }

    headers = headers.append('X-Requested-With', 'XMLHttpRequest');

    const xhr = req.clone({
      headers: headers
    });
    return next.handle(xhr);
  }
}