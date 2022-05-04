import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
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
    private route: ActivatedRoute
  ) {}
  data: any = {};
  @ViewChild("aadharcard") aadharcard;
  @ViewChild("pancard") pancard;
  @ViewChild("elecard") elecard;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log("id", params); // { orderby: "price" }
      this.userService.getUserById(params.id).subscribe((data: any) => {
        console.log("datat", data);

        this.aadharcard.nativeElement.href =
          "http://localhost:8000/" + data.documents.aadharcard.split("/")[1];
        if (
          !data.documents.pancard == null &&
          !data.documents.elecard == null
        ) {
          this.pancard.nativeElement.href =
            "http://localhost:8000/" + data.documents.pancard.split("/")[1];
          this.elecard.nativeElement.href =
            "http://localhost:8000/" + data.documents.elecard.split("/")[1];
        }
        this.data = data;
      });
    });
  }

  onSubmit(form: NgForm) {
    const obj = {
      name: form.value.firstName + " " + form.value.lastName,
      email: form.value.email,
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
