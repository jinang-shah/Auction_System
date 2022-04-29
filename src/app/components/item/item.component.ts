import { Component, Input, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/homepage/login.service";
import { BehaviorSubject } from "rxjs";
import { FavoriteService } from "src/app/services/favorite/favorite.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private favoriteService: FavoriteService
  ) {}
  @Input() item;
  isFavorite = false;
  ngOnInit(): void {
    this.loginService.user.subscribe((data) => {
      console.log("in item", data);
    });
    console.log(this.item);
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteService.toggleFavorite(this.isFavorite, this.item._id);
  }
}
