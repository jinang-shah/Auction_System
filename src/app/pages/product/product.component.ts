import { Component, OnInit } from "@angular/core";
import { GetProductByIdService } from "src/app/services/get-product-by-id.service";
import { io } from "socket.io-client";
import { ActivatedRoute } from "@angular/router";

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
    user_id: "626df57c822702e304d1246a",   // satyam 625a60030ad994a0889689e2  //625fe991ce662df8411b84c6
    isAdmin: true,
    fav_products: ["SDYTFYGKJHGSDH"],
  };

  product: any = {};

  constructor(private getProductById: GetProductByIdService, private route: ActivatedRoute) {
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
    this.comment = ''
  }

  makeBid(newBid) {
    if (this.product.maxBid == 0) {
      alert("Make bid > Base Price")
      this.customBid = null;
      return;
    }
    if (newBid < this.product.basePrice) {
      alert("make bid > basePrice")
      this.customBid = null;
      return;
    }
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

    let id;
    this.route.params.subscribe((params) => {
      console.log("id", params);
      id = params.id // { orderby: "price" }
    });


    this.getProductById
      .getProductById(id)  //2 -> 626666412b20c65c70c4c5d5  // 1 626295062364602a553dd1da
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
