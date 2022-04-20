import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetProductService {
  constructor(public http: HttpClient) {}

  fetchProducts(query, status, catagory, pageNo, itemsPerPage) {
    return this.http.get("http://localhost:3000", {
      params: { query, status, catagory, pageNo, itemsPerPage },
    });
  }
}
