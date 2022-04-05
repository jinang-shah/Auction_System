import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  main_image!: string;

  complete = false

  user = true;

  product = {
    name: "Vintage Car",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem qui at optio rerum fuga ut dolor sint distinctio, deserunt repellendus sit provident ullam. Molestias assumenda deserunt molestiae odio ad!",
    catagory: "Automobiles",
    seller_id: "QGFBSFHMBD6446ADFBADWR",
    buyer_id: "QGFBSFHMBD6446ADFBADWR",
    base_price: 100,
    max_bid_amt: 1000,
    post_date: "03/12/22",
    start_date: "03/12/22",
    end_date: "03/12/22",
    status: "upcoming",
    images: [
      "../../assets/images/audi1.jpeg",
      "../../assets/images/audi2.jpeg",
      "../../assets/images/audi3.jpeg",
      "../../assets/images/audi1.jpeg"
    ],
    bidds: [
      { name: "Jinang Shah", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Yash Maheshwari", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Deep Patel", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Vinesh Dodiya", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Krunal Thakkar", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Ridham Pansuriya", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Jinang Shah", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Jinang Shah", bid_amt: 100, time: "3:15pm 02/08" },
      { name: "Jinang Shah", bid_amt: 100, time: "3:15pm 02/08" },
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





  changeImage(index) {
    this.main_image = this.product.images[index];
  }



  constructor() { }

  ngOnInit(): void {
    this.main_image = this.product.images[0];
  }

}
