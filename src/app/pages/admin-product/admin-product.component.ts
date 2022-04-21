import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  products= [
    {
      name:"Tv",
      id:"DSFDFGFFDGFHDGJ",
      status:"verifid",
      image:"../assets/img/theme/team-1-800x800.jpg"
    },
    {
      name:"Tv",
      id:"DSFDFGFFDGFHDGJ",
      status:"verifid",
      image:"../assets/img/theme/team-1-800x800.jpg"
    },
    {
      name:"Tv",
      id:"DSFDFGFFDGFHDGJ",
      status:"verifid",
      image:"../assets/img/theme/team-1-800x800.jpg"
    },
    {
      name:"Tv",
      id:"DSFDFGFFDGFHDGJ",
      status:"verifid",
      image:"../assets/img/theme/team-1-800x800.jpg"
    }
  ]
  data: any[];

  constructor(private adminservice:AdminProductService ) { }

  ngOnInit(): void {
    this.adminservice.getProduct()
    .subscribe((data)=>{
      data})
  }
  

}
