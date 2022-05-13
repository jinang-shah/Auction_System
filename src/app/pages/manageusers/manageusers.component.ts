import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/adminService/admin.service";
import { Router } from "@angular/router";
import { AdminManageUsersService } from "src/app/services/admin-manage-users.service";

@Component({
  selector: "app-manageusers",
  templateUrl: "./manageusers.component.html",
  styleUrls: ["./manageusers.component.scss"],
})
export class ManageusersComponent implements OnInit {
  users: any = [];

  constructor(
    private adminservice: AdminManageUsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((data) => {
      console.log("data:", data);

      this.users = data;
    });
  }

  deleteUser(id) {
    this.adminservice.removeUsers(id).subscribe((data) => {
      console.log(data);
    });

    this.adminservice.getUsers().subscribe((data) => {
      console.log("data:", data);

      this.users = data;
      // console.log(data);
    });
  }

  viewprofile(id) {
    this.router.navigateByUrl("/user-profile/" + id);
  }

  verifyUsers(e, usersId) {
    console.log("user id:", usersId);
    console.log("event", e);

    const data = {
      status: e.target.value,
    };
    this.adminservice.verifyUsers(usersId, data).subscribe((data) => {
      console.log(data);
    });
  }

  // ngOnInit(): void {
  //   this.adminservice.getUsers().subscribe((data) => {
  //     this.users = data;
  //   });
  // }
}
