import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductByIdService {

  constructor(private http: HttpClient) { }

  url = "https://fakestoreapi.com/products"

  getProductById = (productId) => {
    return this.http.get('http://localhost:8000/product/' + productId)
  }

  addToFavourite(userId, productId) {
    return this.http.post(this.url, {
      userId: userId,
      productId: productId
    })
  }

}
