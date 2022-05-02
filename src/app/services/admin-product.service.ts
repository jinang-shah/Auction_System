// admin-product.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  removeProducts(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get('http://localhost:8000/admin/product')
  }

  removeProduct(productId){
    console.log('productId',productId)
    return this.http.delete('http://localhost:8000/admin/product/'+productId)
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