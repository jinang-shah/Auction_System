import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminManageUsersService {

  constructor(private http: HttpClient) { }
   getUsers() {
    return this.http.get('http://localhost:8000/admin/users')
  }

  removeUsers(userId){
    console.log('userId',userId)
    return this.http.delete('http://localhost:8000/admin/user/'+userId)
  }

  verifyUsers(userId,data){
    console.log('userId',userId);
    console.log('data',data);
    
    if(data.status==="Unverified"){
      data.status= false;
    }
    else{
      data.status = true;
    }
    console.log("data",data);
    
    let url = "http://localhost:8000/admin/users/verify/"+userId;
    return this.http.patch(url,data);
  }
}
