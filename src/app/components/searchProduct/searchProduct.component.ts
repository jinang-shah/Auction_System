import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GetProductService } from "src/app/services/get-product.service";
import { LoaderService } from "src/app/services/loader.service";
import Item from "src/db-json/items";

@Component({
  selector: "app-searchProduct",
  templateUrl: "./searchProduct.component.html",
  styleUrls: ["./searchProduct.component.scss"],
})
export class SearchProductComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getProductService: GetProductService,
    private loader: LoaderService
  ) {}
  items = [];
  status: string;
  catagory: string;
  sortBy: string;
  query: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe((newParams) => {
      this.status = newParams.status || "";
      this.catagory = newParams.catagory || "";
      this.sortBy = newParams.sortBy || "";
      this.query = newParams.query || "";
      this.loader.show();
      this.getProductService
        .fetchProducts(this.query, this.status, this.catagory)
        .subscribe(
          (data: any[]) => {
            this.loader.hide();
            switch (this.sortBy) {
              case "newest":
                data.sort((a, b) => a.startTimestamp - b.startTimestamp);
                break;
              case "lowest":
                data.sort((a, b) => a.basePrize - b.basePrize);
                break;
              case "pname":
                data.sort((a, b) => a.name.localeCompare(b.name));
                break;
              default:
                break;
            }
            this.items = data;
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }

  // this function runs on any of 3 select option change
  onFilterChanges(type, value) {
    switch (type) {
      case "status":
        this.status = value;
        break;
      case "catagory":
        this.catagory = value;
        break;
      case "sortBy":
        this.sortBy = value;
        break;
    }
    this.router.navigate(["/search"], {
      queryParams: {
        status: this.status,
        catagory: this.catagory,
        sortBy: this.sortBy,
      },
      queryParamsHandling: "merge",
    });
  }
}
