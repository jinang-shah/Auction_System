import { Component, OnInit } from '@angular/core';
import { UserhistoryService } from 'src/app/services/userhistory/userhistory.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  constructor(private userhistoryservice:UserhistoryService) { }

  page:number = 1;
  count: number = 0;
  tableSize:number = 5; 
  
// for seller pagination
  pages:number = 1;
  counts: number = 0;
  tableSizes:number = 5;


  buyinghistory :any= [
    // {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // },
    // {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // }, {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // }, {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // }, {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // }, {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // }, {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // }, {
    //   productDetails:{
    //     img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
    //     productName:'Samsung phone'
    //    },
    //   amount:'20$',
    //   status:'pending',
    //   purchasedDate:'22/03/21'
    // },

  ]

  sellinghistory:any = [
    //     {
//       productDetails:{
//         img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SX466_.jpg',
//         productName:'Samsung phone'
//        },
//       minPrice:'20$',
//       status:'pending',
//       sellingDate:'22/03/21'
//     },
  ]

  ngOnInit(): void { 

    this.userhistoryservice.getbuyinghistory().subscribe((buyinghistory1) => {

      this.buyinghistory = buyinghistory1
      console.log(this.buyinghistory);
      console.log(buyinghistory1," : buyingHistory");
      
      
    })

    this.userhistoryservice.getsellinghistory().subscribe((sellinghistory) => {
      this.sellinghistory = sellinghistory
    })

    
    
  }


  onTableDataChange(event :any){
    this.page = event;   
  }
  onTableDataChanges(event :any){
    this.pages = event;   
  }

}
