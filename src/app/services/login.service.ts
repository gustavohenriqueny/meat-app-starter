import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MEAT_API} from 'app/app.api';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

    user: any;

    constructor(private notificationService: NotificationService,
                private router: Router,
                private http: HttpClient) {
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${MEAT_API}/login`, {email: email, password: password})
            .do(user => this.user = user);
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path?: string) {
        this.router.navigate(['/login', path]);
    }
}
