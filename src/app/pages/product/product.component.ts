import { Component, OnInit } from '@angular/core';
import { GetProductByIdService } from 'src/app/services/get-product-by-id.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  main_image!: string;
  isFavourite!: boolean;

  user = {
    user_id: "QGFBSFHMBD6446ADFBADWRe",
    isAdmin: false,
    fav_products: ['SDYTFYGKJHGSDH'],
  }

  product = {
    _id: "SDYTFYGKJHGSDH",
    name: "Vintage Car",
    description: "Lorem ipsum dolor sit amet deserunt molestiae odio ad!",
    catagory: "Automobiles",
    seller_id: "QGFBSFHMBD6446ADFBADWR",
    buyer_id: "QGFBSFHMBD6446ADFBADW",
    base_price: 100,
    max_bid_amt: 1000,
    post_date: "03/12/22",
    start_date: "03/12/22",
    end_date: "03/12/22",
    status: "live",
    images: [
      "../../assets/images/audi1.jpeg",
      "../../assets/images/audi2.jpeg",
      "../../assets/images/audi3.jpeg",
      "../../assets/images/audi1.jpeg"
    ],
    bidds: [
      { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
      { name: "Yash Maheshwari", bid_amt: 100, time: "02/08" },
      { name: "Deep Patel", bid_amt: 100, time: "02/08" },
      { name: "Vinesh Dodiya", bid_amt: 100, time: "02/08" },
      { name: "Krunal Thakkar", bid_amt: 100, time: "02/08" },
      { name: "Ridham Pansuriya", bid_amt: 100, time: "02/08" },
      { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
      { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
      { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    ],
    comments: [
      { sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem qui at optio rerum fuga ut dolor sint ", time: "3:15pm 02/08" },
      {
        sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
      },
      {
        sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
      },
      {
        sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
      },
      {
        sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
      },
      {
        sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
      },
      {
        sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
      },
      {
        sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
      },
      { sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Hello", time: "3:15pm 02/08" },
      { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
      { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
      { sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Hello", time: "3:15pm 02/08" },
      { sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Hello", time: "3:15pm 02/08" },
      { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
    ]
  }

  // To add or remove item in user's favourite list
  addToFavourite() {
    if (!this.isFavourite) {
      this.user.fav_products.push(this.product._id);
    }
    else {
      const index = this.user.fav_products.indexOf(this.product._id);
      if (index > -1) {
        this.user.fav_products.splice(index, 1);
      }
    }
    this.isFavourite = !this.isFavourite;
    // console.log(this.user)
  }

  //fun to check if product is in user's favourite list or not?
  checkIsFavourite(product_id) {
    if (this.user.fav_products.includes(product_id)) {
      return true;
    }
    return false
  }





  changeImage(index) {
    this.main_image = this.product.images[index];
  }



  constructor(private getProductById: GetProductByIdService) { }

  ngOnInit(): void {
    this.main_image = this.product.images[0];

    this.isFavourite = this.checkIsFavourite(this.product._id)
    // console.log("isFav :", this.isFavourite)

    this.getProductById.fetchProductById("dvfbdn").subscribe((data) => {
      console.log(data);
    })


  }

}
