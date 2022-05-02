import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    const obj = {
      name: form.value.name,
      email: form.value.email,
      mobile: form.value.phone,
      password: form.value.password,
      address: {
        address: form.value.address,
        city: form.value.city,
        state: form.value.state,
        postalCode: form.value.postalCode
      },
      documents: [
        {
          aadharcard: form.value.doc
        }
      ]
    };

    this.loginService.register(obj).subscribe(
      (data: { message: string, isRegistered: boolean, user?: any }) => {
        console.log(data);
        if (data.isRegistered) {
          this.router.navigateByUrl('/')
        }
      },
      (err) => {
        console.log("error in registration", err);
      }
    );
  }
}
