import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/loginservice/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginServiceService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  onSubmit(form:NgForm){
    const obj = form.value;

    this.loginService.loginService(obj);
      
      
  }

}
