import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserhistoryService {

  constructor(private http: HttpClient) { }

getbuyinghistory(){
  return this.http.get('')
}

getsellinghistory(){
  return this.http.get('')
}
}
