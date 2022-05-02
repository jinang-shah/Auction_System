import { Component, OnInit, ElementRef } from "@angular/core";

import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ROUTES } from "../sidebar/sidebar.component";
import { LoginService } from "src/app/services/homepage/login.service";
import { LogoutService } from "src/app/services/homepage/logout.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  user = {};
  loggedIn = false;
  search_query;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private logginService: LoginService,
    private logoutService: LogoutService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    this.logginService.user.subscribe((user: {}) => {
      console.log("nnn", user);
      this.user = user;
      this.loggedIn = user.hasOwnProperty("name") ? true : false;
      console.log("final", this.loggedIn, this.user);
    });
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    console.log(titlee);
    return "Online Auction";
  }
  searchItem() {
    if (!this.search_query) {
      return;
    }
    this.router.navigate(["/search"], {
      queryParams: { query: this.search_query },
    });
  }

  logout() {
    this.logoutService.logout().subscribe(
      () => {
        this.router.navigate(["/"]);
      },
      (err) => {
        console.log("errror in logout", err);
      }
    );
  }
}
