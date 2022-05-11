import { Component, OnInit } from '@angular/core';
import { ComplainDetailsService } from 'src/app/services/complain-details.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-complain-details',
  templateUrl: './complain-details.component.html',
  styleUrls: ['./complain-details.component.scss']
})
export class ComplainDetailsComponent implements OnInit {

  constructor(private complain: ComplainDetailsService, private router: Router, private route: ActivatedRoute) { }

  complainn: {}[] = []
  item_namee: string = "";
  id!: any


  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = params.id

    })
    this.complain.getcomplaindetails(this.id)
      .subscribe((data: any) => {
        console.log("data", data);
        console.log(data.images[0]);

        this.complainn.push(data);
        console.log("com", this.complainn);

      })
  }

  onselectfile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        // this.url=event.target.result;
      }
    }
  }

  viewitem() {
    this.router.navigateByUrl('/product');

  }
  close() {
    this.router.navigateByUrl('/admin-complain')
  }


}
