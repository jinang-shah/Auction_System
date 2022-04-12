import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdditemService {
  url = 'http://localhost:3000/additem'
  constructor(private http: HttpClient) { }
  additem_lists(data:any){
    console.log("service",data);
    
    return this.http.post(this.url,data);
  }
}
