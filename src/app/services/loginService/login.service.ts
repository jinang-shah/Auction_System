import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  changePassService(obj){
    
    return this.http.post('http://localhost:8000/user/change-password',obj)
  }
  
  forgotPassService(obj){
   return this.http.post('http://localhost:8000/user/forgot-password',obj)
  }

  resetPassService(obj){
   return this.http.post('http://localhost:8000/user/reset-password',obj)
  }

}


