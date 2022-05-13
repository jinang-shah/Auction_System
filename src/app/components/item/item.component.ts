import { Component, Input, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/homepage/login.service";
import { FavoriteService } from "src/app/services/favorite/favorite.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private favoriteService: FavoriteService,
    private router: Router
  ) {}
  @Input() item;
  isFavorite = false;
  isLoggedIn = false;
  ngOnInit(): void {
    this.loginService.user.subscribe((data: any) => {
      if (!data || !data.hasOwnProperty("name")) return;
      this.isLoggedIn = true;
      let index = data.favouriteProducts.indexOf(this.item._id);
      if (index != -1) this.isFavorite = true;
    });
    console.log(this.item);
  }
  toggleFavorite() {
    if (!this.isLoggedIn) {
      this.router.navigate(["/login"]);
      return;
    }
    this.isFavorite = !this.isFavorite;
    this.favoriteService.toggleFavorite(this.isFavorite, this.item);
  }
}
