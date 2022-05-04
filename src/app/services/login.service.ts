import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public register(data) {
    return this.http.post("http://localhost:8000/user/register", data, {
      withCredentials: true,
    });
  }
}
