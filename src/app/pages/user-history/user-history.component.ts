import { Component, OnInit } from '@angular/core';
import { UserhistoryService } from 'src/app/services/userhistory/userhistory.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  constructor(private userhistoryservice:UserhistoryService) { }

  buyinghistory :any= [
//     {
//       productDetails:{
//         img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
//         productName:'Samsung phone'
//     },
//       amount:'20$',
//       status:'pending',
//       purchasedDate:'22/03/21'
//   },
//   {
//     productDetails:{
//       img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
//       productName:'Samsung phone'
//   },
//     amount:'20$',
//     status:'pending',
//     purchasedDate:'22/03/21'
// },
// {
//   productDetails:{
//     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
//     productName:'Samsung phone'
// },
//   amount:'20$',
//   status:'pending',
//   purchasedDate:'22/03/21'
// },{
//   productDetails:{
//     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
//     productName:'Samsung phone'
// },
//   amount:'20$',
//   status:'pending',
//   purchasedDate:'22/03/21'
// },
// {
//   productDetails:{
//     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
//     productName:'Samsung phone'
// },
//   amount:'20$',
//   status:'pending',
//   purchasedDate:'22/03/21'
// }
  ]

  sellinghistory:any = []

  ngOnInit(): void { 

    this.userhistoryservice.getbuyinghistory().subscribe((buyinghistory) => {
      this.buyinghistory = buyinghistory
    })

    this.userhistoryservice.getsellinghistory().subscribe((sellinghistory) => {
      this.sellinghistory = sellinghistory
    })
  }

}
