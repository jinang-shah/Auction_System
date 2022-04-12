import { Component, OnInit } from '@angular/core';
import { ComplainDetailsService } from 'src/app/services/complain-details.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-complain-details',
  templateUrl: './complain-details.component.html',
  styleUrls: ['./complain-details.component.scss']
})
export class ComplainDetailsComponent implements OnInit {

  constructor(private complain: ComplainDetailsService,private router:Router) { }

  complainn:{}[] = []
  item_namee:string="";


  ngOnInit(): void {
    this.complain.getcomplaindetails("625576afa1b124483980cb60")
    .subscribe((data)=>{
      console.log("data",data);
      this.complainn.push(data);
      console.log("com",this.complainn );
      
    })
  }

  viewitem(){
    this.router.navigateByUrl('/add_item');

  }

  
}
