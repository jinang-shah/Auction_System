
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder,FormControl } from '@angular/forms';
import { ChangePasswordService } from 'src/app/services/changePass/change-password.service';
 
import { ConfirmedValidator } from './confirmPass.validators'
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {


form: FormGroup = new FormGroup({});
  
  constructor(private changePass: FormBuilder,private changePassService:ChangePasswordService) {
  
    this.form = changePass.group({
      oldpassword: ['', [Validators.required]],
      newpassword: ['', [Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}')]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('newpassword', 'confirm_password')
    })
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
    
  get f(){
    return this.form.controls;
  }
   
  submit(){
    const obj = this.form.value
    console.log(obj);
    
    this.changePassService.changePassService(obj);


  }
   
}
