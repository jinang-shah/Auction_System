import { Component, OnInit } from "@angular/core";
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
  data!: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log("id", params); // { orderby: "price" }
      this.userService.getUserById(params.id).subscribe((data) => {
        console.log(data);
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
