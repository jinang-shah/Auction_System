import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassService {

  constructor(private http:HttpClient) { }

  forgotPassService(obj){
    this.http.post('',obj)
  }
}
