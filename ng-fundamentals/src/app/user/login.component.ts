import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./login.component.html",
    styles: [`
        em {
            float: right;
            color: #e05c65;
            padding-left: 10px;
        }
    `]
})
export class LoginComponent {
    userName: string;
    password: string;
    mouseoverLogin: string;
    loginInvalid = false;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    login(formValues): void {
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe(resp => {
                if (!resp) {
                    this.loginInvalid = true;
                }
                else {
                    this.router.navigate(['events']);
                }
            });
    }

    cancel(): void {
        this.router.navigate(['events']);
    }
}