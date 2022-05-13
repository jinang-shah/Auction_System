import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getnewusers(){
    return this.http.get('')
  }

  getnewcomplains(){
    return this.http.get('')
  }
}
