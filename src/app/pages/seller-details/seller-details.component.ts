import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-seller-details",
  templateUrl: "./seller-details.component.html",
  styleUrls: ["./seller-details.component.scss"],
})
export class SellerDetailsComponent implements OnInit {
  constructor(private _location: Location, private router: Router) {}

  ngOnInit(): void {}

  viewCompleteProfile() {
    this.router.navigateByUrl("/user-profile");
  }

  goBack() {
    this._location.back();
  }
}
