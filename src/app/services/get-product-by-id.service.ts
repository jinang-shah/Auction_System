import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductByIdService {

  constructor(private http: HttpClient) { }

  url = "https://fakestoreapi.com/products"

  fetchProductById(_id) {
    return this.http
      .get(this.url, { params: { _id } })

  }
}
