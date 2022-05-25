import { Component, OnInit, ElementRef } from "@angular/core";

import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ROUTES } from "../sidebar/sidebar.component";
import { LoginService } from "src/app/services/homepage/login.service";
import { LogoutService } from "src/app/services/homepage/logout.service";
import { NotificationService } from "src/app/services/notification/notification.service";

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
  notifications = [];
  totalNotifications = 0;
  isNewNotification = false;
  search_query;
  constructor(
    location: Location,
    private router: Router,
    private logginService: LoginService,
    private logoutService: LogoutService,
    private notificationService: NotificationService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    this.logginService.user.subscribe((user: {}) => {
      if (user && typeof user == "object" && user.hasOwnProperty("name")) {
        this.loggedIn = true;
        this.user = user;
        this.notificationService.getNotifications().subscribe(
          (data) => {
            this.isNewNotification = data.some((i) => !i.isViewed);
            this.totalNotifications = data.length || 0;
            this.notifications = data.slice(0, 3);
            console.log("only 3 is ", this.notifications);
          },
          (err) => {
            console.log("lol", err);
          }
        );
      }
    });
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    console.log("erdty", titlee);

    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    console.log("twooow", titlee);

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
    console.log("loggin out");
    this.logoutService.logout().subscribe(
      () => {
        window.location.reload();
      },
      (err) => {
        console.log("errror in logout", err);
      }
    );
  }
}
