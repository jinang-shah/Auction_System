import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-notification-page",
  templateUrl: "./notification-page.component.html",
  styleUrls: ["./notification-page.component.scss"],
})
export class NotificationPageComponent implements OnInit {
  notifications: any[] = [];
  constructor(public notificationService: NotificationService) {}
  receivedData = [];
  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(
      (data: any) => {
        data = data.data;
        console.log("here data is ", data);
        // loop through all products
        for (let i = 0; i < data.length; i++) {
          let now = Date.now();
          let start = new Date(data[i].productId.startDate);
          let end = new Date(data[i].productId.endDate);
          let notify = data[i].when;

          // filter notifications which time is passed and sort
          notify.filter((n) => new Date(n.at).getTime() < now);

          console.log("here data is ", notify);
          if (!notify || !notify[0]) return;
          notify.sort((n1, n2) => {
            return new Date(n2.at).getTime() - new Date(n1.at).getTime();
          });

          // add most recent notification for that product
          this.notifications.push({
            id: data[i].productId._id,
            name: data[i].productId.name,
            img: data[i].productId.images[0],
            auctionTime: this.getRelation(start.getTime(), end.getTime(), now),
          });
        }
      },
      (err) => {
        console.log("Error in getting notifications", err);
      }
    );
    console.log(this.notifications);
  }

  // get text based on auction, started or ended etc.
  getRelation(start: number, end: number, receivedTime: number) {
    let startDiff = receivedTime - start;
    let endDiff = receivedTime - end;
    if (endDiff >= 0) {
      return "ended " + this.getDiffToStr(endDiff) + "ago";
    } else if (startDiff >= 0) {
      return "started " + this.getDiffToStr(startDiff) + "ago";
    } else {
      return "starting in " + this.getDiffToStr(Math.abs(startDiff));
    }
  }

  // accept difference in miliseconds and return text
  getDiffToStr(diff: number, sort: Boolean = false) {
    let diffDays = Math.floor(diff / 86400000);
    let diffHrs = Math.floor((diff % 86400000) / 3600000);
    let diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);

    let output = "";
    if (diffDays) output += diffDays + " days ";
    if (diffHrs) output += diffHrs + " hour ";
    output += diffMins + " minute ";
    return output;
  }
}
