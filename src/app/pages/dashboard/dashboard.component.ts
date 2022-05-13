import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { AdminManageUsersService } from "src/app/services/admin-manage-users.service";
import { ComplainlistService } from "src/app/services/complainlist.service";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor(
    private adminuser: AdminManageUsersService,
    private admincomplain: ComplainlistService
  ) {}
  newUser: any = [
    // {
    //   userName:'Yash',
    //   userEmail:'yash@gmail',
    //   userContact:'9898924254'
    // },
  ];

  newComplain: any = [
    // {
    //   userName:'Yash',
    //   date:'22/12/21'
    // },
  ];

  ngOnInit() {
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40],
    ];
    this.data = this.datasets[0];

    var chartOrders = document.getElementById("chart-orders");

    parseOptions(Chart, chartOptions());

    var ordersChart = new Chart(chartOrders, {
      type: "bar",
      options: chartExample2.options,
      data: chartExample2.data,
    });

    var chartSales = document.getElementById("chart-sales");

    this.salesChart = new Chart(chartSales, {
      type: "line",
      options: chartExample1.options,
      data: chartExample1.data,
    });

    this.adminuser.getUsers().subscribe((newusers: any[]) => {
      console.log(newusers);

      this.newUser = newusers.slice(4, 9);
    });

    this.admincomplain.getcomplainlist().subscribe((newcomplains: any) => {
      console.log(newcomplains);

      this.newComplain = newcomplains.slice(0, 5);
    });
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
