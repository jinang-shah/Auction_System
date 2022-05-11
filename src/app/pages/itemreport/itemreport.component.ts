import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  NgForm,
  FormControl,
  Validators,
} from "@angular/forms";
import { ItemcomplainService } from "src/app/services/itemcomplain.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemComplain } from "src/app/models/complain";
import { LoginService } from "src/app/services/homepage/login.service";

@Component({
  selector: "app-itemreport",
  templateUrl: "./itemreport.component.html",
  styleUrls: ["./itemreport.component.scss"],
})
export class ItemreportComponent implements OnInit {
  item_report: FormGroup;
  complainDetails: string = "";
  images: File = null;
  submitvalid: Boolean = false;
  photoerror = false;
  productId!: any;
  userId!: any;
  sellerId!: any;

  constructor(
    private itemcomplain: ItemcomplainService,
    private router: Router,
    private route: ActivatedRoute,
    private getuser: LoginService
  ) {
    this.createForm();
  }

  createForm() {
    this.item_report = new FormGroup({
      complainDetails: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      images: new FormControl("", [Validators.required]),
    });
  }

  hasError(controlName, error) {
    return this.item_report.controls[controlName].hasError(error);
  }

  onphotoselect(event) {
    this.images = <File>event.target.files[0];
    console.log("photo", this.images, event);
  }

  itemreport() {
    if (this.images == null) {
      return (this.photoerror = true);
    }
    this.photoerror = false;

    const obj = {
      buyerId: this.userId,
      productId: this.productId,
      sellerId: this.sellerId,
      complainDetails: this.item_report.value.complainDetails,
      images: this.item_report.value.images,
    };

    obj.images = this.images;

    const fd = new FormData();
    const keys = Object.keys(obj);
    for (const key of keys) {
      fd.append(key, obj[key]);
    }

    this.itemcomplain.item_complainb(fd).subscribe((data) => {
      console.log(data);
    });
    this.display();
  }

  display() {
    this.submitvalid = true;
  }
  closecard() {
    this.router.navigateByUrl("/user-history");
    this.submitvalid = false;
  }
  addnewcomplain() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params.id;
      this.sellerId = params.sid;
      console.log(this.productId);
    });
    this.getuser.user.subscribe((data: any) => {
      this.userId = data._id;
      console.log(this.userId);
    });
  }
}
