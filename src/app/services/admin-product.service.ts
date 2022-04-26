// admin-product.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get('http://localhost:8000/product')
  }

  verifyProduct(productId,data){
    

    if(data.status==="Unverified"){
      data.status= false;
    }
    else{
      data.status = true;
    }
    console.log("data",data);
    
    let url = "http://localhost:8000/admin/product/verify/"+productId;
    return this.http.patch(url,data);
    
  }
} 