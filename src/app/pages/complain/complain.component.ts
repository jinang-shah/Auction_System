import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/adminService/admin.service';
import { ComplainlistService } from 'src/app/services/complainlist.service';
@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.scss']
})
export class ComplainComponent implements OnInit {

  constructor(private adminservice: AdminService, private complainlist: ComplainlistService) { }


  complainListArr: {}[] = []
  item_namee: string = "";
  list: {}[] = [];


  ngOnInit(): void {

    this.complainlist.getcomplainlist()
      .subscribe((data) => {
        // console.log("data", data);
        this.complainListArr.push(data);
        // console.log("COM", this.complainListArr)
      })

    console.log(this.list);
  }

}
