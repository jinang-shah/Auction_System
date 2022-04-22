import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplainlistService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:8000/admin/complainlist'
  getcomplainlist = () => {
    return this.http.get(this.url)
  }
}
