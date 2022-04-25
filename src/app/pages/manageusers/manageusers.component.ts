import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/adminService/admin.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  constructor(private adminservice:AdminService ) { }

  

  users:any= [
    // {
    //   name:"xyz",
    //   email:"22/13/21",
    //   mobile: 2345654323,
    //   status:'verified',
    //   id:"3456"
    // },
    // {
    //   name:"xyz",
    //   email:"22/13/21",
    //   mobile: 2345654323,
    //   status:'verified',
    //   id: "21"
    // },
    // {
    //   name:"xyz",
    //   email:"22/13/21",
    //   mobile: 2345654323,
    //   status:'unverified',
    //   id:"234123"
    // },
    
  
  ]

 

  

  ngOnInit(): void {
    this.adminservice.getUsers()
    .subscribe((data)=>{
      console.log(data);
      
      this.users= data;
    })
    console.log(this.users);
    
  }

}
