import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/loginService/login.service";
import { ConfirmedValidator } from "../change-password/confirmPass.validators";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private changePass: FormBuilder,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {
    this.form = changePass.group(
      {
        password: [
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
        validator: ConfirmedValidator("password", "confirm_password"),
      }
    );
  }
  ngOnInit(): void {
    console.log(this.route.params); // { orderby: "price" }

    //throw new Error('Method not implemented.');
    this.route.params.subscribe((params) => {
      console.log(1);
      console.log(params); // { orderby: "price" }
      this.loginService.resetToken = params.id; // { orderby: "price" }
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    const obj = this.form.value;
    // console.log(obj);
    this.form.reset();

    this.loginService.resetPassService(obj).subscribe((data) => {
      console.log("done");
    });
  }
}
