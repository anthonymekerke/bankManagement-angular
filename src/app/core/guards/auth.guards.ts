import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";

/*
 * Guards allow to control the access on a route.
 * Everytime we ask to access the route, 
 * the method 'canActivate' is called to check is
 * it allowed or not. In this case, we also redirect
 * the user if he is not allowed.
*/

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    logged!: boolean;

    constructor(private auth: AuthService, private router: Router){
        this.auth.logged$.subscribe(
            x => this.logged = x
        );
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.logged) {this.router.navigateByUrl('/login')}
        return this.logged;
    }
}