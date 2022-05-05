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
        this.notifications = data;
        console.log("all is h", this.notifications);
      },
      (err) => {
        console.log("Error in getting notifications", err);
      }
    );

    // readed all notification request
    this.notificationService.notificationViewed().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  removeNotif(id: string) {
    this.notifications = this.notifications.filter((n) => n.id != id);
  }
}
