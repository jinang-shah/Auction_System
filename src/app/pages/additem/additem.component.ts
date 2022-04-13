import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, ReactiveFormsModule} from '@angular/forms'; 

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

 
  additemform:FormGroup;
  item_name:string="";
  item_description:string="";
  item_baseprice:number;
  bid_startdate:Date;
  bid_enddate:Date;
  item_orignalbill:File = null;
  item_photo:File=null;
  valid:Boolean=false;




  constructor(private frmbuilder:FormBuilder) {
    this.additemform=frmbuilder.group({
      i_name:new FormControl(),
      i_description:new FormControl(),
      i_baseprice:new FormControl(),
      i_startdate:new FormControl(),
      i_enddate:new FormControl(),
      i_orignalbill:new FormControl(),
      i_photo:new FormControl()
    })
   }
    onfileselect(event){
      this.item_orignalbill =<File>event.target.files[0];
    }
  onUpload(){
    const fd = new FormData();
    fd.append('image' , this.item_orignalbill,this.item_orignalbill.name)
  }

  additem(additem:any){
    
    this.item_name = this.additemform.controls.i_name.value;
    this.item_description = this.additemform.controls.i_description.value;
    this.item_baseprice = this.additemform.controls.i_baseprice.value;
    this.bid_startdate = this.additemform.controls.i_startdate.value;
    this.bid_enddate = this.additemform.controls.i_enddate.value;
    this.item_orignalbill = this.additemform.controls.i_orignalbill.value;
    this.item_photo = this.additemform.controls.i_photo.value;
    

    const obj = {
        itemName:this.item_name,
        itemdes:this.item_description,
        itembsp:this.item_baseprice ,
        itembids:this.bid_startdate ,
        itembide:this.bid_enddate ,
        itembill:this.item_orignalbill
      
    }
    // console.log(this.item_name);
    // console.log(this.item_description);
    // console.log(this.item_baseprice);
    // console.log(this.bid_startdate);
    // console.log(this.bid_enddate);
    // console.log(this.item_orignalbill);
    console.log(obj);
    
  }
  display(){
    this.valid=true
  }
  ngOnInit(): void {
  }

}
