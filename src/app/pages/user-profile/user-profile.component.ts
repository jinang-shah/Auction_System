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
        this.aadharcard.nativeElement.href =
          "http://localhost:8000/" + data.documents.aadharcard.split("/")[1];
        this.pancard.nativeElement.href =
          "http://localhost:8000/" + data.documents.pancard.split("/")[1];
        this.elecard.nativeElement.href =
          "http://localhost:8000/" + data.documents.elecard.split("/")[1];
        this.data = data;
      });
    });
  }

  onSubmit(form: NgForm) {
    const obj = form;
    console.log(obj.value);
    this.userProfileService.user_profile(obj).subscribe(
      (data) => {},
      (err) => {
        console.log("error in profile page", err);
      }
    );
  }
}
