import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { XhrInterceptor } from "./xhr.interceptor";

export const httpInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
]