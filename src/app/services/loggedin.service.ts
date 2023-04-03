import {Injectable} from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable()
export class LoggedinService implements CanLoad {

    constructor(private loginService: LoginService) {
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        const loggedIn = this.loginService.isLoggedIn();
        if (!loggedIn) {
            this.loginService.handleLogin(`/${route.path}`);
        }
        return loggedIn;
    }

}
