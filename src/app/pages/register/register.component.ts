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
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  aadharcard!: File;

  onaadharcardselect(event) {
    this.aadharcard = <File>event.target.files[0];
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    const obj = {
      name: form.value.name,
      email: form.value.email,
      mobile: form.value.phone,
      password: form.value.password,
      address: form.value.address,
      city: form.value.city,
      state: form.value.state,
      postalCode: form.value.postalCode,
      aadharcard: form.value.doc,
    };

    obj.aadharcard = this.aadharcard;
    
    const formData = new FormData();
    const keys = Object.keys(obj);
    for (const key of keys) {
      formData.append(key, obj[key]);
    }
    
    this.loginService.register(formData).subscribe(
      (data: { message: string; isRegistered: boolean; user?: any }) => {
        console.log(data);
        if (data.isRegistered) {
          window.location.href = "/";
        }
      },
      (err) => {
        console.log("error in registration", err);
      }
    );
  }
}
