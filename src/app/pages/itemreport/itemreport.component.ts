import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm, FormControl, Validators } from '@angular/forms';
import { ItemcomplainService } from 'src/app/services/itemcomplain.service';
import {Router} from '@angular/router'
import { ItemComplain } from 'src/app/models/complain';

@Component({
  selector: 'app-itemreport',
  templateUrl: './itemreport.component.html',
  styleUrls: ['./itemreport.component.scss']
})
export class ItemreportComponent implements OnInit {
 
  item_report:FormGroup;
  item_complain:string="";
  item_photo:File=null;
  submitvalid:Boolean=false;
  photoerror = false;

  constructor(private itemcomplain:ItemcomplainService,private router:Router){
    this.createForm();
  }

  createForm(){
    
      this.item_report=new FormGroup({
      c_description: new FormControl('',[Validators.required,Validators.minLength(3)]),
      item_photo:new FormControl('',[Validators.required])
    })
  }

  hasError(controlName,error)
  {
    return this.item_report.controls[controlName].hasError(error);
  }

  onphotoselect(event){
      this.item_photo = <File>event.target.files[0];
      console.log("photo",this.item_photo,event);
  }

    
  


  itemreport(){
    if(this.item_photo == null)
    {
      return this.photoerror = true;
    }
    this.photoerror=false;
    const complainData: ItemComplain = this.item_report.value as ItemComplain;
    complainData.item_photo = this.item_photo;
    const fd = new FormData();
    const keys = Object.keys(complainData);
    for (const key of keys) {
     fd.append(key , complainData[key]); 
    }
    console.log(fd);
    this.itemcomplain.item_complainb(fd).subscribe(data=>{
    console.log(data); 
    }); 
 
  }

  display(){
    this.submitvalid=true;
  }
  closecard(){
    this.router.navigateByUrl('/item_complain');
    this.submitvalid=false;
  }
  addnewcomplain(){
    window.location.reload()
  }

 

  ngOnInit(): void {
  }

}
