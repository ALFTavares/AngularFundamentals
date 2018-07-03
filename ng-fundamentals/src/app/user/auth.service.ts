import { Injectable } from "@angular/core";
import { IUser } from "./user.model"
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient) {}

    loginUser(userName: string,
              password: string) {
        let loginInfo = { username: userName, password: password };
        let options = { headers: new HttpHeaders({ "Content-Type": "application/json"})};

        return this.http.post("api/login", loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data["user"];
            }))
            .pipe(catchError(err => {
                return of(false);
            }))

        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: "some",
        //     lastName: "name"
        // }
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let options = { headers: new HttpHeaders({ "Content-Type": "application/json"})};

        return this.http.put(`/api/users/${ this.currentUser.id }`, this.currentUser, options);
    }

    chckAuthenticationStatus() {
        this.http.get("/api/currenIdentity")
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = <IUser>data;
                }
            }))
            .subscribe();
    }

    logout() {
        this.currentUser = undefined;

        let options = { headers: new HttpHeaders({ "Content-Type": "application/json"})};

        return this.http.post("/api/logout", {}, options)
    }
}