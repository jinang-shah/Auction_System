import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/adminService/admin.service';
import { ComplainlistService } from 'src/app/services/complainlist.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.scss']
})
export class ComplainComponent implements OnInit {

  constructor(private adminservice: AdminService, private complainlist: ComplainlistService, private router: Router) { }


  complainListArr: any = []
  item_namee: string = "";
  list: {}[] = [];


  viewcomplain() {
    this.router.navigateByUrl('/complian-details')
  }


  ngOnInit(): void {

    this.complainlist.getcomplainlist()
      .subscribe((data) => {
        console.log("data", data);
        this.complainListArr = data
        // this.complainListArr.push(data);
        // console.log("COM", this.complainListArr)
      })
  }

  solveComplain(e, complainId) {
    const data = {
      status: e.target.value
    }
    this.complainlist.solveComplains(complainId, data).subscribe((data) => { console.log(data) })
  }



}
