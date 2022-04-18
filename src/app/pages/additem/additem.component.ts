import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule, Validators} from '@angular/forms'; 
import { AdditemService } from 'src/app/services/additem.service';
import {Router} from '@angular/router'
import { AddItem } from 'src/app/models/item';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
 
  additemform:FormGroup;
  item_name:string="";
  item_description:string="";
  item_category:string="";
  item_baseprice!:number;
  bid_startdate!:Date;
  bid_enddate!:Date;
  item_orignalbill:File = null;
  item_photo:File = null;
  catagories: any = ['Furniture','Electric','Footware']
  submitvalid:Boolean=false;

  // image
  billerror = false;
  photoerror = false;
  
  constructor(private itemdata:AdditemService,private router:Router) {
    this.createForm(); 
   }


   createForm()
   {
     this.additemform = new FormGroup({
      item_name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      item_category: new FormControl('',Validators.required),
      item_description: new FormControl('',[Validators.required,Validators.minLength(3)]),
      item_base_price: new FormControl('',[Validators.required,Validators.min(1)]),
      bid_start_date: new FormControl(),
      bid_enddate: new FormControl(),
      item_bill: new FormControl('',[Validators.required]),
      item_photo:new FormControl('',[Validators.required])
    })
   }
   

  onbillselect(event){

      this.item_orignalbill = <File>event.target.files[0];
      console.log(this.item_orignalbill,event);

    }

  onphotoselect(event){

      this.item_photo = <File>event.target.files[0];
      console.log("photo",this.item_photo,event);

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
    if(this.item_orignalbill == null)
    {
      return this.billerror = true;
    }
    if(this.item_photo == null)
    {
      return this.photoerror = true;
    }
    this.photoerror = false;
    this.billerror = false;

    const itemData: AddItem = this.additemform.value as AddItem;
    itemData.item_bill = this.item_orignalbill;
    itemData.item_photo = this.item_photo;
    const fd = new FormData();
    const keys = Object.keys(itemData);
    for (const key of keys) {
     fd.append(key , itemData[key]); 
    }

    // this.item_name = this.additemform.controls.i_name.value;
    // this.item_category= this.additemform.controls.i_category.value;
    // this.item_description = this.additemform.controls.i_description.value;
    // this.item_baseprice = this.additemform.controls.i_baseprice.value;
    // this.bid_startdate = this.additemform.controls.i_startdate.value;
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
