import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(public http: HttpClient) {}

  getNotifications() {
    return this.http
      .get("http://localhost:8000/user/notifications", {
        withCredentials: true,
      })
      .pipe(
        map((data: any) => {
          data = data.data;
          let notifications: any[] = [];
          // loop through all products
          for (let i = 0; i < data.length; i++) {
            let now = Date.now();
            let start = new Date(data[i].productId.startDate);
            let end = new Date(data[i].productId.endDate);
            let notify = data[i].when;

            // filter notifications which time is passed and sort, insort gives most recent notification
            notify = notify.filter((n) => new Date(n.at).getTime() < now);
            console.log(notify);
            if (!notify || !notify[0]) continue;
            notify.sort((n1, n2) => {
              return new Date(n2.at).getTime() - new Date(n1.at).getTime();
            });

            // add most recent notification for that product
            notifications.push({
              id: notify[0]._id,
              productId: data[i].productId._id,
              isViewed: notify[0].viewed,
              name: data[i].productId.name,
              img: data[i].productId.images[0],
              auctionTime: this.getRelation(
                start.getTime(),
                end.getTime(),
                now
              ),
            });
          }
          console.log("after is ", notifications);
          return notifications;
        })
      );
  }

  removeNotification(id) {
    return this.http.delete("http://localhost:8000/user/notification/" + id, {
      withCredentials: true,
    });
  }

  notificationViewed() {
    return this.http.get("http://localhost:8000/user/notifications/view", {
      withCredentials: true,
    });
  }

  // utils
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
