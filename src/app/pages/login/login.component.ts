import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "src/app/services/loginService/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}
  ngOnDestroy() {}
  onSubmit(form: NgForm) {
    const obj = form.value;
    this.loginService.loginService(obj);
  }
}
