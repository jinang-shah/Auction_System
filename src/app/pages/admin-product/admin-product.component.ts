// admin-product.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  products:any= [ 
    // {
    //   name:"Tv",
    //   id:"DSFDFGFFDGFHDGJ",
    //   status:"verifid",
    //   image:"../assets/img/theme/team-1-800x800.jpg"
    // },
    // {
    //   name:"Tv",
    //   id:"DSFDFGFFDGFHDGJ",
    //   status:"verifid",
    //   image:"../assets/img/theme/team-1-800x800.jpg"
    // },
    // {
    //   name:"Tv",
    //   id:"DSFDFGFFDGFHDGJ",
    //   status:"verifid",
    //   image:"../assets/img/theme/team-1-800x800.jpg"
    // },
    // {
    //   name:"Tv",
    //   id:"DSFDFGFFDGFHDGJ",
    //   status:"verifid",
    //   image:"../assets/img/theme/team-1-800x800.jpg"
    // }
  ]
  // data: any[];

  constructor(private adminservice:AdminProductService,private http:HttpClient ) { }

  ngOnInit(): void {
    this.adminservice.getProduct()
    .subscribe((data)=>{
      console.log("data:",data);
      this.products = data;
      
    })
  }


  verifyProduct(e,productId){
    console.log("product id:",productId);
    
    const data = {
      status:e.target.value
    }

    this.adminservice.verifyProduct(productId,data).subscribe((data)=>{console.log(data);
    }) 
  }

  deleteProduct(id){
    this.adminservice.removeProduct(id).subscribe((data) => {
      console.log(data);
    })
    this.adminservice.getProduct().subscribe((data) => {
      console.log('data:',data);   
      this.products = data;
    });
  }


}