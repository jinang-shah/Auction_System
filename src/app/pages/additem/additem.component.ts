import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule, Validators} from '@angular/forms'; 
import { AdditemService } from 'src/app/services/additem.service';
import {Router} from '@angular/router'
import { AddItem } from 'src/app/models/item';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
 
  additemform:FormGroup;
  name:string="";
  description:string="";
  category:string="";
  basePrice!:number;
  startDate!:string;
  endDate!:string;
  bill:File = null;
  images:File = null;
  min_date:Date = new Date();
  catagories: any = ['Furniture','Electric','Footware']
  submitvalid:Boolean=false;

  // image
  billerror = false;
  photoerror = false;
  
  constructor(private itemdata:AdditemService,private router:Router, public datepipe: DatePipe) {
    this.createForm(); 
    const dateFormat = 'yyyy-MM-dd';
    this.startDate = datepipe.transform(
      new Date().setDate(new Date().getDate()),
      dateFormat
    );
    this.endDate = datepipe.transform(
      new Date().setDate(new Date().getDate()+1),
      dateFormat
    );
  
   }
  

   createForm()
   {
     this.additemform = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      category: new FormControl('',Validators.required),
      description: new FormControl('',[Validators.required,Validators.minLength(3)]),
      basePrice: new FormControl('',[Validators.required,Validators.min(1)]),
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      bill: new FormControl('',[Validators.required]),
      images:new FormControl('',[Validators.required])
    })
   }
   

  onbillselect(event){

      this.bill = <File>event.target.files[0];
      console.log(this.bill,event);

    }

  onphotoselect(event){

      this.images = <File>event.target.files[0];
      console.log("photo",this.images,event);

  }

  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image' , this.item_orignalbill,this.item_orignalbill.name);
  // }

  hasError(controlName,error)
  {
    return this.additemform.controls[controlName].hasError(error);
  }

  additem(){
    if(this.bill == null)
    {
      return this.billerror = true;
    }
    if(this.images == null)
    {
      return this.photoerror = true;
    }
    this.photoerror = false;
    this.billerror = false;

    const itemData: AddItem = this.additemform.value as AddItem;
    itemData.bill = this.bill;
    itemData.images = this.images;
    const fd = new FormData();
    const keys = Object.keys(itemData);
    for (const key of keys) {
     fd.append(key , itemData[key]); 
    }

    // this.item_name = this.additemform.controls.i_name.value;
    // this.item_category= this.additemform.controls.i_category.value;
    // this.item_description = this.additemform.controls.i_description.value;
    // this.item_baseprice = this.additemform.controls.i_baseprice.value;
    // this.bid_start_date = this.additemform.controls.i_startdate.value;
    // this.bid_enddate = this.additemform.controls.i_enddate.value;
    // this.item_orignalbill = this.additemform.controls.i_orignalbill.value;
    // this.item_photo = this.additemform.controls.i_photo.value;

    const obj = {
        // item_name:this.item_name,
        // item_category:this.item_category,
        // item_description:this.item_description,
        // item_base_price:this.item_baseprice,
        // bid_start_date:this.bid_startdate,
        // bid_end_date:this.bid_enddate,
        // item_bill:this.item_orignalbill,
        // item_photo:this.item_photo
      
    }
    console.log("fd",fd);
    this.itemdata.additem_lists(fd).subscribe(data=>{
    console.log(data); 
    });  
  }
  display(){
    this.submitvalid=true;
  }
  refreshpage(){
    this.router.navigateByUrl('/add_item');
    this.submitvalid=false;
  }
  addnewitem(){
    window.location.reload()
  }
  ngOnInit(): void {
     
  }

}
