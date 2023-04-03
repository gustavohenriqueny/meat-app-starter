import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';

@Injectable()
export class LoggedinService implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) {
    }

    checkAuthentication(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn();
        if (!loggedIn) {
            this.loginService.handleLogin(`/${path}`);
        }
        return loggedIn;
    }

    canLoad(route: Route): boolean {
        console.log('canload')
        return this.checkAuthentication(route.path);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canactivate')
        return this.checkAuthentication(route.routeConfig.path);
    }


}
