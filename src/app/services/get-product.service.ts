import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetProductService {
  constructor(public http: HttpClient) {}

  fetchProducts(productParams) {
    return this.http.get("http://localhost:8000/product", {
      params: productParams,
    });
  }
}
