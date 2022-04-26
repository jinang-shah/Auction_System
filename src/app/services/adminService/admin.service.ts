import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getComplain(){
    return this.http.get('url');
  }

  getUsers(){
    return this.http.get('url');
  }

  
}
