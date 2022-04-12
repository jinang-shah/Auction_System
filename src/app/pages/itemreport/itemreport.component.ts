import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm, FormControl, Validators } from '@angular/forms';
import { ItemcomplainService } from 'src/app/services/itemcomplain.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-itemreport',
  templateUrl: './itemreport.component.html',
  styleUrls: ['./itemreport.component.scss']
})
export class ItemreportComponent implements OnInit {
 
  item_complain:string="";
  item_photo:File=null;
  submitvalid:Boolean=false;

  constructor(private itemcomplain:ItemcomplainService,private router:Router){}
    item_report=new FormGroup({
      c_description: new FormControl('',[Validators.required,Validators.minLength(3)]),
      i_photo:new FormControl('',[Validators.required])
    })
  


  itemreport(){
    this.item_complain = this.item_report.controls.c_description.value;
    this.item_photo = this.item_report.controls.i_photo.value;

    const obj ={
    item_complain:this.item_complain,
    item_photo:this.item_photo
  }
    console.log("obj",obj);
    this.itemcomplain.item_complainb(obj).subscribe(data=>{
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
