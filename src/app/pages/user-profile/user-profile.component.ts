import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const obj = form; 
     console.log(obj.value)
    this.userProfileService.user_profile(obj)
    .subscribe((data) => {
      
    },
    (err)=>{console.log("error in profile page",err);})
  }

}
