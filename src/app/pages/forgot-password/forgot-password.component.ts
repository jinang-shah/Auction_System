import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  submit(form:NgForm){
    const obj = form.value
    console.log(obj);
    form.reset();
    this.loginService.forgotPassService(obj).subscribe((data)=>{
      console.log("done")
    });
    

  }
}
