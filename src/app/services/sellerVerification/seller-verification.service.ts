import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SellerVerificationService {
  constructor(private http: HttpClient) {}

  sellerVerification(obj) {
    return this.http.post(
      "http://localhost:8000/user/sellerverification/",
      obj,
      { withCredentials: true }
    );
  }
}
