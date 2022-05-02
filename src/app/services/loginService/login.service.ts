import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  resetToken: any;

  constructor(private http: HttpClient) {}

  loginService(obj) {
    return this.http.post("http://localhost:8000/user/login", obj);
  }

  changePassService(obj) {
    return this.http.post("http://localhost:8000/user/change-password", obj, {
      withCredentials: true,
    });
  }

  forgotPassService(obj) {
    return this.http
      .post("http://localhost:8000/user/forgot-password", obj)
      .pipe(
        tap((resData) => {
          //this.resetToken = resData;
        })
      );
  }

  resetPassService(obj) {
    console.log(obj);
    console.log(this.resetToken);
    return this.http.post(
      `http://localhost:8000/user/reset-password/${this.resetToken}`,
      obj
    );
  }
}
