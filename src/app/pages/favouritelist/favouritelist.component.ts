import { Component, OnInit } from "@angular/core";
import { FavoriteService } from "src/app/services/favorite/favorite.service";

@Component({
  selector: "app-favouritelist",
  templateUrl: "./favouritelist.component.html",
  styleUrls: ["./favouritelist.component.scss"],
})
export class FavouritelistComponent implements OnInit {
  constructor(private favService: FavoriteService) {}
  products = [];
  currentPage = 1;
  totalPage = 1;
  itemsPerPage = 5;
  hasNext = false;
  hasPrev = false;
  ngOnInit(): void {
    this.changePage(1);
  }

  changePage(n) {
    this.favService.getList(n, this.itemsPerPage).subscribe((data: any) => {
      this.currentPage = n;
      console.log(data);
      this.totalPage = data.totalPages;
      if (this.currentPage <= 1) {
        this.hasPrev = false;
      } else {
        console.log(this.currentPage);
        this.hasPrev = true;
      }
      if (this.currentPage >= this.totalPage) {
        this.hasNext = false;
      } else {
        this.hasNext = true;
      }
      this.products = data.products;
    });
  }
}
