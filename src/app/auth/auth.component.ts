import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/form";
import { Observable } from "rxjs";
import { AuthService, AuthREsponseData } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLoggedIn;
  isLoading = false;
  error = "";
  ngOnInit() {}

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<Auth>;

    if (this.isLoggedIn) {
      this.authService.login(email, password).subscribe(resLoginData => {
        console.log(resLoginData);
        this.isLoading = false;
      });
    } else {
      this.isLoading = true;
      this.authService.signUp(email, password);
    }

    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    
    form.reset();
  }
}
