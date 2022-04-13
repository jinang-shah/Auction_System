import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
