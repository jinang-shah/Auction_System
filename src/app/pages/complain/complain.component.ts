import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/adminService/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.scss']
})
export class ComplainComponent implements OnInit {

  constructor(private adminservice:AdminService,private router:Router ) { }

  

  complains:any= [
    {
      name:"xyz",
      date:"22/13/21",
      status:"pending",
      id:"22"

    },
    {
      name:"xyz",
      date:"22/13/21",
      status:"solved",
      id:"224"
    },
    {
      name:"xyz",
      date:"22/13/21",
      status:"pending",
      id:"2266"
    }
  ]
 
viewcomplain(){
  this.router.navigateByUrl('/complian-details')
}
  

  ngOnInit(): void {
    this.adminservice.getComplain()
    .subscribe((data)=>{
      this.complains= data;
    })
  }


}
