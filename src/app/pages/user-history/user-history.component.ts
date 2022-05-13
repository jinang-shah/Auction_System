import { Component, OnInit } from "@angular/core";
import { UserhistoryService } from "src/app/services/userhistory/userhistory.service";

@Component({
  selector: "app-user-history",
  templateUrl: "./user-history.component.html",
  styleUrls: ["./user-history.component.scss"],
})
export class UserHistoryComponent implements OnInit {
  constructor(private userhistoryservice: UserhistoryService) {}

  // for buyer pagination
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  // for seller pagination
  pages: number = 1;
  counts: number = 0;
  tableSizes: number = 5;

  buyinghistory: any = [];

  sellinghistory: any = [];

  ngOnInit(): void {
    this.userhistoryservice.getbuyinghistory().subscribe((buyinghistory1) => {
      console.log(buyinghistory1);

      this.buyinghistory = buyinghistory1;
    });

    this.userhistoryservice.getsellinghistory().subscribe((sellinghistory) => {
      this.sellinghistory = sellinghistory;
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableDataChanges(event: any) {
    this.pages = event;
  }
}
