import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FavoriteService {
  constructor(private http: HttpClient) {}
  toggleFavorite(add: boolean, productId) {
    this.http
      .post(
        "http://localhost:8000/user/favourite",
        {
          add: true,
          productId,
        },
        { withCredentials: true }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
