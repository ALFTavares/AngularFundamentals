import { Injectable } from "@angular/core";
import { IUser } from "./user.model"
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string,
              password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: "some",
            lastName: "name"
        }
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}