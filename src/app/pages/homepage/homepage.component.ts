import { Component, OnInit } from "@angular/core";
import { GetProductService } from "src/app/services/get-product.service";
import { LoaderService } from "src/app/services/loader.service";
@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  constructor(
    public getProductervice: GetProductService,
    private loader: LoaderService
  ) {}
  items = [];

  ngOnInit(): void {
    this.loader.show();
    this.getProductervice.fetchProducts("", "live", "", 1, 6).subscribe(
      (data: []) => {
        this.loader.hide();
        this.items = data;
      },
      (err) => {
        this.loader.hide();
        console.log(err);
      }
    );
  }
}
