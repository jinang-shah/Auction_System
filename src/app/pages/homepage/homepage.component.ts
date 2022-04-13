import { Component, OnInit } from "@angular/core";
import Items from "src/db-json/items";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  constructor() {}
  items = Items;

  ngOnInit(): void {}
}
