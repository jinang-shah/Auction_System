import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/loginService/login.service";

import { ConfirmedValidator } from "./confirmPass.validators";
@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private changePass: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.form = changePass.group(
      {
        oldpassword: ["", [Validators.required]],
        newpassword: [
          "",
          [
            Validators.required,
            Validators.pattern(
              "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{8,}"
            ),
          ],
        ],
        confirm_password: ["", [Validators.required]],
      },
      {
        validator: ConfirmedValidator("newpassword", "confirm_password"),
      }
    );
  }
  message = "";
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    // const obj = this.form.value

    const obj = {
      oldPassword: this.form.value.oldpassword,
      newPassword: this.form.value.newpassword,
      confirmPassword: this.form.value.confirm_password,
    };

    console.log(obj);

    this.form.reset();
    this.loginService
      .changePassService(obj)
      .subscribe((data: { message: string; isValid: boolean }) => {
        if (data.isValid) {
          window.alert("Password Change Sucessfully");
          this.router.navigateByUrl("/");
        } else {
          this.message = data.message;
          setTimeout(() => {
            this.message = null;
          }, 5000);
        }
      });
  }
}
