import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "./services/homepage/login.service";
import { LoaderService } from "./services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy, OnInit {
  isLoading: boolean = false;
  title = "Online Auction";
  loadSub: Subscription;
  user: {};

  constructor(
    private loader: LoaderService,
    private loginService: LoginService
  ) {
    this.loadSub = this.loader.loadingObs().subscribe((showLoader) => {
      this.isLoading = showLoader;
    });
  }

  ngOnInit(): void {
    this.loginService.getUser();
  }
  ngOnDestroy(): void {
    this.loadSub.unsubscribe();
  }
}
