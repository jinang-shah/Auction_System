import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordService } from 'src/app/services/resetPass/reset-password.service';
import { ConfirmedValidator } from '../change-password/confirmPass.validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  
  constructor(private changePass: FormBuilder,private resetPassService:ResetPasswordService) {
  
    this.form = changePass.group({
      
      newpassword: ['', [Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}')]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('newpassword', 'confirm_password')
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
  get f(){
    return this.form.controls;
  }
   
  submit(){
    const obj = this.form.value
    console.log(obj);
    
    this.resetPassService.resetPassService(obj);
    this.form.reset();

  }
   
}
