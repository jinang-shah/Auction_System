import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  public user_profile(data) {
    return this.http.patch("http://localhost:8000/user/edit", data, {
      withCredentials: true,
    });
  }

  public getuserprofile() {
    return this.http.get("http://localhost:8000/user/:id/");
  }
}
