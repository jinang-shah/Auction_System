import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Item from "src/db-json/items";

@Component({
  selector: "app-searchProduct",
  templateUrl: "./searchProduct.component.html",
  styleUrls: ["./searchProduct.component.scss"],
})
export class SearchProductComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  items = [];
  status: string;
  catagory: string;
  sortBy: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe((newParams) => {
      this.status = newParams.status || "";
      this.catagory = newParams.catagory || "";
      this.sortBy = newParams.sortBy || "";
      this.items = Item.filter((item) => {
        if (this.status !== "" && item.status !== this.status) return false;
        if (this.catagory !== "" && item.catagory !== this.catagory)
          return false;
        return true;
      });
      switch (this.sortBy) {
        case "newest":
          this.items.sort((a, b) => a.startTimestamp - b.startTimestamp);
          break;
        case "lowest":
          this.items.sort((a, b) => a.prize - b.prize);
          break;
        case "pname":
          this.items.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }
      // this.items.sort()
    });
  }
  onStatusChange(e: any): void {
    this.status = e.target.value || "";
    this.router.navigate(["/search"], {
      queryParams: { status: this.status },
      queryParamsHandling: "merge",
    });
  }
  onCatagoryChange(e: any): void {
    this.catagory = e.target.value || "";
    this.router.navigate(["/search"], {
      queryParams: {
        catagory: this.catagory,
      },
      queryParamsHandling: "merge",
    });
  }
  onSortByChange(e: any): void {
    this.sortBy = e.target.value || "";
    this.router.navigate(["/search"], {
      queryParams: { sortBy: this.sortBy },
      queryParamsHandling: "merge",
    });
  }
}
