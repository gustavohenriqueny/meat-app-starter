import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from 'app/services/login.service';
import {NotificationService} from '../../services/notification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'mt-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    navigateTo: string;

    constructor(private formBuilder: FormBuilder,
                private notificationService: NotificationService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', Validators.required),
        });
        this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
    }

    login() {
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe((user) => this.notificationService.notify(`Bem vindo ${user.name}`),
                response => this.notificationService.notify(response.error.message),
                () => {
                    this.router.navigate([this.navigateTo]);
                });
    }
}
