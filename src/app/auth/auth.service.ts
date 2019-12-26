import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

import { User } from "./user.model";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  authKey = "AIzaSyAqVCsdaTgasX4oJRx0JFXvtrtorJEKACQ";
  authUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
    this.authKey;
  signInUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    this.authKey;
  user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;
  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.authUrl, {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleErrors),
        tap(resData => {
          this.hasAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signInUrl, {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleErrors),
        tap(resData => {
          this.hasAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(["login"]);
    localStorage.removeItem("userData");
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private hasAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const newUser = new User(email, userId, token, expirationDate);
    this.user.next(newUser);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(newUser));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  private handleErrors(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occured";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email exists already.";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "This email doesn't exists.";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "Password entered is Invalid.";
        break;
    }
    return throwError(errorMessage);
  }
}
