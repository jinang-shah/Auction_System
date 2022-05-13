import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}
  user = new BehaviorSubject({});
  getUser() {
    this.http
      .get("http://localhost:8000/user/login", {
        withCredentials: true,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.user.next(data);
        },
        (err) => {
          console.log("Invalid Token", err);
        }
      );
  }
}
