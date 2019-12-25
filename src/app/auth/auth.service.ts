import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, Subject } from "rxjs";

import { User } from "./user.model";

export interface AuthREsponseData {
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
  constructor(private http: HttpClient) {}
  authKey = "AIzaSyAqVCsdaTgasX4oJRx0JFXvtrtorJEKACQ";
  authUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
    this.authKey;
  signInUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    this.authKey;
  user = new Subject<User>();
  signUp(email: string, password: string) {
    return this.http
      .post<AuthREsponseData>(this.authUrl, {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleErrors), tap(resData => {
          this.hasAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthREsponseData>(this.signInUrl, {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleErrors),
        tap(resData => {
          this.hasAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  private hasAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );
    const newUser = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(newUser);
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
