import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerVerificationService } from 'src/app/services/sellerVerification/seller-verification.service';

@Component({
  selector: 'app-seller-verification',
  templateUrl: './seller-verification.component.html',
  styleUrls: ['./seller-verification.component.scss']
})
export class SellerVerificationComponent implements OnInit {

  constructor(private sellerVerification: SellerVerificationService) { }

  sellerVerificationForm = new FormGroup({
    pancard: new FormControl('',[ Validators.required,]),
    elecard: new FormControl('',[ Validators.required,]),
  });

  
  ngOnInit(): void {
  }

  onSubmit(){
    const obj = this.sellerVerificationForm.value
      
    this.sellerVerification.sellerVerification(obj).subscribe((data) => {
      console.log(data);
      })

    this.sellerVerificationForm.reset()
    
  }

}
