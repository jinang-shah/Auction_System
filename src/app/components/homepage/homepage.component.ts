import { Component, OnInit } from "@angular/core";
import { GetProductService } from "src/app/services/get-product.service";
@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  constructor(public getProductervice: GetProductService) {}
  items = [];

  ngOnInit(): void {
    this.getProductervice.fetchProducts("", "live", "").subscribe(
      (data: []) => {
        this.items = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
