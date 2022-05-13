import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "src/app/services/loginService/login.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
  message = "";
  submit(form: NgForm) {
    const obj = form.value;
    console.log(obj);
    form.reset();
    this.loginService.forgotPassService(obj).subscribe((resdata: any) => {
      if (resdata.isValid) {
        console.log(resdata.message);
        // this.loginService.resetToken = resdata.data.resetToken;
        //console.log(this.loginService.resetToken);
        //this.message = resdata.message;
        alert(resdata.message);
        // this.message = resdata.message;
      } else {
        console.log(resdata.message);
        this.message = resdata.message;

        setTimeout(() => {
          this.message = null;
        }, 8000);
      }
    });
  }
}
