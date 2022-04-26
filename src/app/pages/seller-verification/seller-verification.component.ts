import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SellerVerificationService } from "src/app/services/sellerVerification/seller-verification.service";

@Component({
  selector: "app-seller-verification",
  templateUrl: "./seller-verification.component.html",
  styleUrls: ["./seller-verification.component.scss"],
})
export class SellerVerificationComponent implements OnInit {
  constructor(private sellerVerification: SellerVerificationService) {}

  sellerVerificationForm = new FormGroup({
    pancard: new FormControl("", [Validators.required]),
    elecard: new FormControl("", [Validators.required]),
  });

  pancard!: File;
  elecard!: File;

  ngOnInit(): void {}

  onpancardselect(event) {
    this.pancard = <File>event.target.files[0];
  }

  onelecardselect(event) {
    this.elecard = <File>event.target.files[0];
  }

  onSubmit() {
    const obj = this.sellerVerificationForm.value;

    obj.pancard = this.pancard;
    obj.elecard = this.elecard;

    const formData = new FormData();

    const keys = Object.keys(obj);
    for (const key of keys) {
      formData.append(key, obj[key]);
    }

    this.sellerVerification.sellerVerification(formData).subscribe((data) => {
      console.log(data);
    });

    this.sellerVerificationForm.reset();
  }
}
