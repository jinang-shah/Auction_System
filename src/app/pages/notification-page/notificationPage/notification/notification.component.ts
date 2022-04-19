import { Component, Input, OnInit } from "@angular/core";
import { NotificationService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent implements OnInit {
  constructor(public notificationService: NotificationService) {}

  @Input("item") item;
  time: string;
  status: string;
  ngOnInit(): void {
    console.log(this.item);
  }

  removeNotification(id: string) {
    this.notificationService.removeNotification(id).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log("some error in deleting notification");
      }
    );
  }
}
