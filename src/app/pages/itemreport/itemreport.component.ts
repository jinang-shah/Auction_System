import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-itemreport',
  templateUrl: './itemreport.component.html',
  styleUrls: ['./itemreport.component.scss']
})
export class ItemreportComponent implements OnInit {
  item_report:FormGroup;
  item_complain:string="";
  item_photo:File=null;

  constructor(private frmbuilder:FormBuilder){
    this.item_report=frmbuilder.group({
      c_description: new FormControl(),
      i_photo:new FormControl()
      
    })
  }


  itemreport(item_report){
    this.item_complain = item_report.controls.c_description.value;
    this.item_photo = item_report.controls.i_photo.value;

    const obj ={
    itemcomplain:this.item_complain,
    itemphoto:this.item_photo
  }
    console.log(obj);
 
  }

 

  ngOnInit(): void {
  }

}
