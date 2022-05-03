import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(public http: HttpClient) {}

  getNotifications() {
    return this.http.get("http://localhost:8000/user/notifications", {
      withCredentials: true,
    });
  }

  removeNotification(id) {
    return this.http.delete("http://localhost:8000/user/notifications/" + id, {
      withCredentials: true,
    });
  }
}
