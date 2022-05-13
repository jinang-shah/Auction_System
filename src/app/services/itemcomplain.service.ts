import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemcomplainService {
//  url = 'http://localhost:3000/itemcomplain'
url = 'http://localhost:8000/product/complain'
  constructor(private http: HttpClient) { }
  item_complainb(data:any){
    console.log("service",data);
    return this.http.post(this.url,data);
  }
}
