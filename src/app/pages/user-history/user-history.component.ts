import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  constructor() { }

  buyinghistory = [
    {
      productDetails:{
        img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
        productName:'Samsung phone'
    },
      amount:'20$',
      status:'pending',
      purchasedDate:'22/03/21'
  },
  {
    productDetails:{
      img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
      productName:'Samsung phone'
  },
    amount:'20$',
    status:'pending',
    purchasedDate:'22/03/21'
},
{
  productDetails:{
    img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    productName:'Samsung phone'
},
  amount:'20$',
  status:'pending',
  purchasedDate:'22/03/21'
},{
  productDetails:{
    img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    productName:'Samsung phone'
},
  amount:'20$',
  status:'pending',
  purchasedDate:'22/03/21'
},
{
  productDetails:{
    img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    productName:'Samsung phone'
},
  amount:'20$',
  status:'pending',
  purchasedDate:'22/03/21'
}
  ]

  ngOnInit(): void {
  }

}
