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

  solveComplains(complainId, data) {
    if (data.status === "Pending") {
      data.status = false;
    } else {
      data.status = true
    }
    let url2 = 'http://localhost:8000/admin/complain/solve/' + complainId;
    return this.http.patch(url2, data)
    //complain
  }
}
