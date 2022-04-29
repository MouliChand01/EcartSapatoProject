import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartserService } from '../ecartser.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  loadData:any=[];
  systemdate:any;
  systemtime:any;
  message:any;
  grandTotal=0
  name:string='';
  totalPrice:any=[]
   
   constructor(private src:EcartserService,private router:Router,private datepipe:DatePipe) { }

   ngOnInit(): void {
    this.LoadContant();
    this.systemdate = this.datepipe.transform((new Date),"dd-mm-yy");
    this.systemtime = this.datepipe.transform((new Date),"hh:mm:ss a");
    this.src.getName().subscribe((msg) =>this.name=msg.text);
   }
  
  LoadContant(){
    this.src.catItems().subscribe((data)=>this.loadData=data)
  }

  procedToPay(){
    for(let i of this.loadData){
      this.src.delateOrdersData(i.id).subscribe();
    }
    this.loadData =[]
   } 
  
  backAction(){
    this.router.navigate(['About']);
    this.countPrice();
    this.grandTotal=this.totalPrice.reduce(function (a: any,b: any) {
      return a + b;
    }, 0);
    console.log("Grand Total :",this.grandTotal)
  }

  countPrice(){
    for(let i of this.loadData){
      this.totalPrice.push(i.price)
    }
  }


  makeexcel(){

    // let contant=document.getElementById("exceldata")
    
    // const worksheet:XLSX.WorkSheet = XLSX.utils.table_to_sheet(contant);
    
    // const workbook:XLSX.WorkBook = XLSX.utils.book_new();
    
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
    // XLSX.writeFile(workbook, this.file)
    
    }

}
