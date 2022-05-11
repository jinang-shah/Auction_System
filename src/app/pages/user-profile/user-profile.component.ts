import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/homepage/login.service";
import { UserProfileService } from "src/app/services/user-profile.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private userProfileService: UserProfileService,
    private userService: UserService,
    private route: ActivatedRoute,
    private loginservice: LoginService,
    private router: Router
  ) {}
  data: any = {};
  user!: any;
  @ViewChild("aadharcard") aadharcard;
  @ViewChild("pancard") pancard;
  @ViewChild("elecard") elecard;

  ngOnInit() {
    this.loginservice.user.subscribe((user: any) => (this.user = user));
    if (!this.user || !this.user.name) {
      this.router.navigateByUrl("/");
    }
    this.route.params.subscribe((params) => {
      console.log("id", params); // { orderby: "price" }
      this.userService.getUserById(params.id).subscribe((data: any) => {
        console.log("datat", data);

        this.aadharcard.nativeElement.href =
          "http://localhost:8000/" + data.documents.aadharcard?.split("/")[1];
        this.pancard.nativeElement.href =
          "http://localhost:8000/" + data.documents.pancard?.split("/")[1];
        this.elecard.nativeElement.href =
          "http://localhost:8000/" + data.documents.elecard?.split("/")[1];

        this.data = data;
      });
    });
  }

  onSubmit(form: NgForm) {
    const obj = {
      name: form.value.firstName + " " + form.value.lastName,
      email: form.value.Email,
      mobile: form.value.phone,
      password: form.value.password,
      address: form.value.address,
      city: form.value.city,
      state: form.value.state,
      postalCode: form.value.postalCode,
      aadharcard: form.value.doc,
    };
    this.userProfileService.user_profile(obj).subscribe(
      (data: any) => {
        alert(data.message);
      },
      (err) => {
        console.log("error in profile page", err);
      }
    );
  }
}
