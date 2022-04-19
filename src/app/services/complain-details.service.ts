import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplainDetailsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/complain'
  // 
  getcomplaindetails = (complainId) =>{
    return this.http.get(this.url+complainId)
  }
}
