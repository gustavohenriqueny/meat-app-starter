import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MEAT_API} from 'app/app.api';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs-compat/add/operator/filter';

@Injectable()
export class LoginService {

    user: any;
    lastUrl: string;

    constructor(private notificationService: NotificationService,
                private router: Router,
                private http: HttpClient) {
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${MEAT_API}/login`, {email: email, password: password})
            .do(user => this.user = user);
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', path]);
    }

    logout() {
        this.user = undefined;
    }
}
