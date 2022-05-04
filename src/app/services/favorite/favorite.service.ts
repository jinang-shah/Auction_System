import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FavoriteService {
  constructor(private http: HttpClient) {}
  toggleFavorite(add: boolean, product) {
    if (add) {
      let before30min = new Date(product.startDate).getTime() - 60000 * 30;
      this.http
        .post(
          "http://localhost:8000/user/favourite/" + product._id,
          {
            when: [
              { at: before30min },
              { at: product.startDate },
              { at: product.endDate },
            ],
          },
          { withCredentials: true }
        )
        .subscribe((data) => {
          console.log(data);
        });
    } else {
      this.http
        .delete("http://localhost:8000/user/favourite/" + product._id, {
          withCredentials: true,
        })
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
