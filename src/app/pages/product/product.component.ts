import { Component, OnInit } from "@angular/core";
import { GetProductByIdService } from "src/app/services/get-product-by-id.service";
import { io } from "socket.io-client";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  main_image!: string;
  isFavourite!: boolean;
  comment = "";
  customBid = null;
  socket = io("ws://localhost:8000");

  user = {
    user_id: "625a60030ad994a0889689e2",   // satyam 625a60030ad994a0889689e2  //625fe991ce662df8411b84c6
    isAdmin: true,
    fav_products: ["SDYTFYGKJHGSDH"],
  };

  product: any = {
    // _id: "SDYTFYGKJHGSDH",
    // name: "Vintage Car",
    // description: "Lorem ipsum dolor sit amet deserunt molestiae odio ad!",
    // catagory: "Automobiles",
    // seller_id: "QGFBSFHMBD6446ADFBADWRWE",
    // buyer_id: "QGFBSFHMBD6446ADFBADWRW",
    // base_price: 100,
    // max_bid_amt: 1000,
    // post_date: "03/12/22",_id: "SDYTFYGKJHGSDH",
    // name: "Vintage Car",
    // description: "Lorem ipsum dolor sit amet deserunt molestiae odio ad!",
    // catagory: "Automobiles",
    // seller_id: "QGFBSFHMBD6446ADFBADWRWE",
    // buyer_id: "QGFBSFHMBD6446ADFBADWRW",
    // base_price: 100,
    // max_bid_amt: 1000,
    // post_date: "03/12/22",
    // start_date: "03/12/22",
    // end_date: "03/12/22",
    // status: "live",
    // images: [
    //   "../../assets/images/audi1.jpeg",
    //   "../../assets/images/audi2.jpeg",
    //   "../../assets/images/audi3.jpeg",
    //   // "../../assets/images/audi1.jpeg"
    // ],
    // bidds: [
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    //   { name: "Yash Maheshwari", bid_amt: 100, time: "02/08" },
    //   { name: "Deep Patel", bid_amt: 100, time: "02/08" },
    //   { name: "Vinesh Dodiya", bid_amt: 100, time: "02/08" },
    //   { name: "Krunal Thakkar", bid_amt: 100, time: "02/08" },
    //   { name: "Ridham Pansuriya", bid_amt: 100, time: "02/08" },
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    // ],
    // comments: [
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem qui at optio rerum fuga ut dolor sint ", time: "3:15pm 02/08" },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
    // ]
    // start_date: "03/12/22",
    // end_date: "03/12/22",
    // status: "live",
    // images: [
    //   "../../assets/images/audi1.jpeg",
    //   "../../assets/images/audi2.jpeg",
    //   "../../assets/images/audi3.jpeg",
    //   // "../../assets/images/audi1.jpeg"
    // ],
    // bidds: [
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    //   { name: "Yash Maheshwari", bid_amt: 100, time: "02/08" },
    //   { name: "Deep Patel", bid_amt: 100, time: "02/08" },
    //   { name: "Vinesh Dodiya", bid_amt: 100, time: "02/08" },
    //   { name: "Krunal Thakkar", bid_amt: 100, time: "02/08" },
    //   { name: "Ridham Pansuriya", bid_amt: 100, time: "02/08" },
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    //   { name: "Jinang Shah", bid_amt: 100, time: "02/08" },
    // ],
    // comments: [
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem qui at optio rerum fuga ut dolor sint ", time: "3:15pm 02/08" },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   {
    //     sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur", time: "3: 15pm 02/08"
    //   },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Jinang Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Yash Shah", data: "Hello", time: "3:15pm 02/08" },
    //   { sender_id: "NJVJNWJNADKVNKJVB", name: "Deep  Shah", data: "Hello", time: "3:15pm 02/08" },
    // ]
  };

  constructor(private getProductById: GetProductByIdService) {
    console.log("socket : ", this.socket)

    this.socket.on("connect", async () => {
      console.log("new user connected")
      this.socket.emit('userdata', { productId: this.product._id, userId: this.user.user_id })
    })


  }

  // To add or remove item in user's favourite list
  addToFavourite() {
    console.log("product id :", this.product._id);
    if (!this.isFavourite) {
      this.user.fav_products.push(this.product._id);
    } else {
      const index = this.user.fav_products.indexOf(this.product._id);
      if (index > -1) {
        this.user.fav_products.splice(index, 1);
      }
    }
    this.isFavourite = !this.isFavourite;
  }

  add() {
    this.getProductById
      .addToFavourite(this.user.user_id, this.product._id)
      .subscribe((data) => {
        console.log(data);
      }),
      (error) => {
        console.log("add to fav Error :", error);
      };
  }

  //fun to check if product is in user's favourite list or not?
  checkIsFavourite(product_id) {
    if (this.user.fav_products.includes(product_id)) {
      return true;
    }
    return false;
  }

  //submit comment
  postComment() {
    const commentData = {
      timeStamp: new Date(),
      data: this.comment,
      productId: this.product._id
    };

    this.socket.emit('sendComment', commentData)
  }

  makeBid(newBid) {
    if (newBid < 10) {
      alert("make bid >= 10$")
      this.customBid = null;
      return;
    }
    const bidDetails = {
      timeStamp: new Date(),
      amount: this.product.maxBid + newBid,
      productId: this.product._id
    };

    this.socket.emit('makeBid', bidDetails)
    this.customBid = null;
  }

  ngOnInit(): void {
    this.getProductById
      .getProductById("626295062364602a553dd1da")  //2 -> 626666412b20c65c70c4c5d5  // 1 626295062364602a553dd1da
      .subscribe((data) => {
        this.product = data;

        console.log(data)

        this.main_image = this.product.images[0];

        this.socket.on("connect", async () => {
          console.log("new user connected")
          this.socket.emit('userdata', { productId: this.product._id, userId: this.user.user_id })
        })

        this.socket.on('receiveComment', (data) => {
          if (this.product._id === data.productId) {
            console.log("comment")
            this.product.comments.unshift(data);
            console.log(this.product)
          }
        })

        this.socket.on('receiveBid', (data) => {
          if (this.product._id === data.productId) {
            console.log(data)
            console.log("new bid")
            this.product.bidDetails.unshift(data);
            this.product.maxBid = data.amount;
            console.log(this.product)
          }
        })
      });

    this.isFavourite = this.checkIsFavourite(this.product._id);
    // console.log("isFav :", this.isFavourite)
  }

  // to change main product image
  changeImage(index) {
    this.main_image = this.product.images[index];
  }


}
