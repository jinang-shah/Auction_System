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

  users: any = [
    {
      name: "xyz",
      mail: "22/13/21",
      number: 2345654323,
      status: "verified",
      id: "3456c",
    },
    {
      name: "xyz",
      mail: "22/13/21",
      number: 2345654323,
      status: "verified",
      id: "21",
    },
    {
      name: "xyz",
      mail: "22/13/21",
      number: 2345654323,
      status: "unverified",
      id: "234123",
    },
  ];

  viewprofile(id) {
    this.router.navigateByUrl("/user-profile/" + id);
  }

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
