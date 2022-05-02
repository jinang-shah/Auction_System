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
  status: string = "";
  category: string = "";
  sortBy: string = "";
  query: string = "";

  ngOnInit(): void {
    this.route.queryParams.subscribe((newParams) => {
      console.log("changed", this.isFetching, this.isEndOfData);
      this.status = newParams.status || "";
      this.category = newParams.category || "";
      this.sortBy = newParams.sortBy || "";

      if (newParams.query) {
        this.query = newParams.query;
        this.fetchData(true);
        return;
      }

      this.fetchData();
    });
  }

  @HostListener("window:scroll", ["$event"]) onWindowScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      if (this.isEndOfData) return;
      this.currentPage++;
      this.fetchData();
    }
  }

  // this function runs on any of 3 select option change
  onFilterChanges(type, value) {
    switch (type) {
      case "status":
        this.status = value;
        break;
      case "category":
        this.category = value;
        break;
      case "sortBy":
        this.sortBy = value;
        break;
    }
    this.router.navigate(["/search"], {
      queryParams: {
        status: this.status,
        category: this.category,
        sortBy: this.sortBy,
      },
      queryParamsHandling: "merge",
    });
    this.fetchData(true);
  }

  fetchData(removeOld: boolean = false) {
    if (removeOld) {
      this.items = [];
      this.currentPage = 0;
    }
    if (this.isFetching) return;
    this.isFetching = true;
    this.getProductService
      .fetchProducts({
        query: this.query,
        status: this.status,
        category: this.category,
        sortBy: this.sortBy,
        pageNo: this.currentPage,
        itemsPerPage: 10,
      })
      .subscribe(
        (data: any[]) => {
          console.log("now", data);
          this.isFetching = false;
          if (!data || data.length == 0) {
            this.isEndOfData = true;
            return;
          }
          this.items.push(...data);
        },
        (err) => {
          this.isFetching = false;
          console.log(err);
        }
      );
  }
}
