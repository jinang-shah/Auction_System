import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/loginService/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {}
  ngOnDestroy() {}
  onSubmit(form: NgForm) {
    console.log(form);

    const obj = {
      email: form.value.email,
      password: form.value.password,
    };

    this.loginService
      .loginService(obj)
      .subscribe((data: { message: string; isValid: boolean; user?: any }) => {
        console.log(data);

        if (data.isValid) {
          window.location.href = "/";
        }
      });
  }
}
