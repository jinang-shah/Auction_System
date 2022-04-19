import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GetProductService } from "src/app/services/get-product.service";
import { LoaderService } from "src/app/services/loader.service";

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
  currentPage = 0;
  isEndOfData = false;
  isFetching = false;
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
        .fetchProducts(this.query, this.status, this.catagory, 0, 10)
        .subscribe(
          (data: any[]) => {
            this.loader.hide();
            this.items = data;
            this.sortItems();
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }

  @HostListener("window:scroll", ["$event"]) onWindowScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      this.currentPage++;
      if (this.isFetching) return;
      this.isFetching = true;
      this.getProductService
        .fetchProducts(
          this.query,
          this.status,
          this.catagory,
          this.currentPage,
          10
        )
        .subscribe((data: []) => {
          this.isFetching = false;
          if (data.length == 0) {
            this.isEndOfData = true;
          }
          this.items.push(...data);
        });
    }
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
    if (type == "sortBy") {
      this.sortItems();
      return;
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

  sortItems() {
    switch (this.sortBy) {
      case "newest":
        this.items.sort((a, b) => a.startTimestamp - b.startTimestamp);
        break;
      case "lowest":
        this.items.sort((a, b) => a.basePrize - b.basePrize);
        break;
      case "pname":
        this.items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
  }
}
