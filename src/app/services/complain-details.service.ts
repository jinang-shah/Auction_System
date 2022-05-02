import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplainDetailsService {

  constructor(private http: HttpClient) { }

  // url = 'http://localhost:3000/complian-details/'
  url = 'http://localhost:8000/admin/'
  // 
  getcomplaindetails = (complainId) => {
    return this.http.get(this.url + complainId)
  }
}
