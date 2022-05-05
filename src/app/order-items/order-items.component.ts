import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EcartserService } from '../ecartser.service';


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
  grandTotal:number=0;
  name:string='';
  totalPrice:any=[];
  quantity:number=1;
  hide=true
  // api:any;

   
   constructor(private src:EcartserService,private router:Router,private datepipe:DatePipe) { }

   

   ngOnInit(): void {
    this.LoadContant();
    this.systemdate = this.datepipe.transform((new Date),"dd-MM-yy");
    this.systemtime = this.datepipe.transform((new Date),"hh:mm:ss a");
    this.src.getName().subscribe((msg) =>this.name=msg.text);
    // this.dropdownapi();
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
  }

  countPrice(){
    for(let i of this.loadData){
      this.totalPrice.push(i.price*this.quantity);
    }
  }


  
    incre(a:any){
      if(a){

      if(this.quantity>=0){
      this.quantity=this.quantity+1;
      this.countPrice();
      this.grandTotal=this.totalPrice.reduce(function (a: any,b: any) {
        return a + b;
      }, 0);
      console.log(this.loadData)
      }
    }
  }
    decre(b:any){
      if(this.quantity<=0){
        return
      }else{
        this.quantity=this.quantity-1;
        
        this.countPrice();
        this.grandTotal=this.totalPrice.reduce(function (a: any,b: any) {
          return a + b;
        }, 0);  
      }
    
    }
    hideing(){
     this.hide=false
    }
    // dropdownapi(){
    //   this.src.GetFurits().subscribe(data=>this.api=data);
    // }

}
