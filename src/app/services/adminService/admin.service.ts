import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  verifyUsers(usersId: any, data: { status: any; }) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getComplain(){
    return this.http.get('url');
  }

  getUsers(){
    return this.http.get('http://localhost:8000/admin/users');
  }

  
}
