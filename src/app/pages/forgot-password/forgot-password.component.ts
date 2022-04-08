import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForgotPassService } from 'src/app/services/forgotPass/forgot-pass.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private forgotPassService:ForgotPassService) { }

  ngOnInit(): void {
  }

  submit(form:NgForm){
    const obj = form.value
    console.log(obj);
    
    this.forgotPassService.forgotPassService(obj);


  }
}
