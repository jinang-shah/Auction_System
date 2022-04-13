import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoaderService } from "./services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  isLoading: boolean = false;
  title = "Online Auction";
  loadSub: Subscription;

  constructor(private loader: LoaderService) {
    this.loadSub = this.loader.loadingObs().subscribe((showLoader) => {
      this.isLoading = showLoader;
    });
  }

  ngOnDestroy(): void {
    this.loadSub.unsubscribe();
  }
}
