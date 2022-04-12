import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  changePassService(obj){
    this.http.post('',obj)
  }
  
  forgotPassService(obj){
    this.http.post('',obj)
  }

  resetPassService(obj){
    this.http.post('',obj)
  }

}


