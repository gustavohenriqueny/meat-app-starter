import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
    selector: 'mt-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
    }

    user(): any {
        return this.loginService.user;
    }

    isLoggedIn() {
        return this.loginService.isLoggedIn();
    }

    login() {
        this.loginService.handleLogin()
    }

    logout() {
        this.loginService.logout()
    }

}
