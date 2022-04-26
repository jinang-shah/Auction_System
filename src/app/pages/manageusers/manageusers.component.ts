import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/adminService/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-manageusers",
  templateUrl: "./manageusers.component.html",
  styleUrls: ["./manageusers.component.scss"],
})
export class ManageusersComponent implements OnInit {
  constructor(private adminservice: AdminService, private router: Router) {}


  users: any = [];


  viewprofile(id) {
    this.router.navigateByUrl("/user-profile/" + id);
  }

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
