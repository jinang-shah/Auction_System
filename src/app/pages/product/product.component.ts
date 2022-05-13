import { Component, OnInit } from "@angular/core";
import { GetProductByIdService } from "src/app/services/get-product-by-id.service";
import { io } from "socket.io-client";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "src/app/services/homepage/login.service";
import { LoaderService } from "src/app/services/loader.service";
import { FavoriteService } from "src/app/services/favorite/favorite.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  main_image!: string;
  isFavourite!: boolean;
  comment = "";
  myLastBid = 0;
  customBid = null;
  socket!: any;

  user: any = {};
  product: any = {};

  constructor(
    private getProductById: GetProductByIdService,
    private route: ActivatedRoute,
    private getUser: LoginService,
    private loder: LoaderService,
    private favService: FavoriteService
  ) { }

  // To add or remove item in user's favourite list
  addToFavourite() {
    this.isFavourite = !this.isFavourite;
    this.favService.toggleFavorite(this.isFavourite, this.product);
  }

  //submit comment
  postComment() {
    const commentData = {
      timeStamp: new Date(),
      data: this.comment,
      productId: this.product._id,
    };

    this.socket.emit("sendComment", commentData);
    this.comment = "";
  }

  makeBid(newBid, addOn) {

    if (this.myLastBid == this.product.maxBid && this.myLastBid != 0) {
      alert("Current Maximum Bid Amount is Yours !!");
      this.customBid = null;
      return;
    }
    let bidAmount;

    if (addOn) {
      bidAmount = this.product.maxBid + newBid;
    } else {
      bidAmount = newBid;
    }

    if (bidAmount < this.product.basePrice) {
      alert("Make bid >= Base Price");
      this.customBid = null;
      return;
    }
    if (bidAmount < this.product.maxBid) {
      alert("Make bid >= Current Bid Amount");
      this.customBid = null;
      return;
    }

    const bidDetails = {
      timeStamp: new Date(),
      amount: bidAmount,
      productId: this.product._id,
    };

    this.socket.emit("makeBid", bidDetails);
    this.myLastBid = bidAmount;
    this.product.maxBid = bidAmount;
    this.customBid = null;
  }

  ngOnInit(): void {
    this.getUser.user.subscribe((user) => {
      this.user = user;
      console.log("user", user);
    });

    let id;
    this.route.params.subscribe((params) => {
      console.log("id", params);
      id = params.id;
    });

    this.getProductById.getProductById(id).subscribe((data) => {
      this.product = data;

      let myBids = this.product.bidDetails.filter((bid) => {
        return bid.bidderId._id == this.user._id;
      });
      console.log("myfdi", myBids);
      if (myBids && myBids.length != 0) {
        myBids.sort((bid1, bid2) => {
          return bid1.bidAmount - bid2.bidAmount;
        });
        this.myLastBid = myBids[myBids.length - 1].bidAmount;
      } else {
        this.myLastBid = 0;
      }

      console.log(data);

      this.main_image = this.product.images[0];
      console.log("donn");
      this.socket = io("ws://localhost:8000");
      this.socket.on("connect", async () => {
        console.log("new user connected");
        this.socket.emit("userdata", {
          productId: this.product._id,
          userId: this.user._id,
        });
      });

      this.socket.on("receiveComment", (data) => {
        if (this.product._id === data.productId) {
          console.log("comment");
          this.product.comments.unshift(data);
          console.log(this.product);
        }
      });

      this.socket.on("receiveBid", (data) => {
        if (this.product._id === data.productId) {
          console.log(data);
          console.log("new bid");
          this.product.bidDetails.unshift(data);
          this.product.maxBid = data.amount;
          console.log(this.product);
        }
      });
      this.isFavourite = this.user.favouriteProducts.includes(this.product._id);
    });
  }

  // to change main product image
  changeImage(index) {
    this.main_image = this.product.images[index];
  }
}
