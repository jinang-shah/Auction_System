import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
      
constructor(private loginService:LoginService){}

ngOnInit() {
  
}

onSubmit(form:NgForm){
  const obj = form; 
  this.loginService.register(obj)
  .subscribe((data) => {
    console.log(data);
  },
  (err)=>{console.log("error in registration",err);})
}
}

  
