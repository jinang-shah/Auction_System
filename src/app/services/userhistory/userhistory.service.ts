import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserhistoryService {

  constructor(private http: HttpClient) { }

getbuyinghistory(){
  return this.http.get('http://localhost:8000/user/buyinghistory/62600205c814c02a2d99a9f9')
}

getsellinghistory(){
  return this.http.get('http://localhost:3000/user/sellinghistory/62600205c814c02a2d99a9f9')
}

}
