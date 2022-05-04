import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FavoriteService {
  constructor(private http: HttpClient) {}
  toggleFavorite(add: boolean, productId) {
    if (add) {
      this.http
        .post(
          "http://localhost:8000/user/favourite/" + productId,
          {},
          { withCredentials: true }
        )
        .subscribe((data) => {
          console.log(data);
        });
    } else {
      this.http
        .delete("http://localhost:8000/user/favourite/" + productId, {
          withCredentials: true,
        })
        .subscribe((data) => {
          console.log(data);
        });
    }
  }

  getList(pageNo, itemsPerPage) {
    return this.http.get("http://localhost:8000/user/favourite/", {
      withCredentials: true,
      params: {
        itemsPerPage,
        pageNo,
      },
    });
  }
}
