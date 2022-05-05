import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartserService } from '../ecartser.service';

@Component({
  selector: 'app-about-products',
  templateUrl: './about-products.component.html',
  styleUrls: ['./about-products.component.css']
})
export class AboutProductsComponent implements OnInit {
  
  LoadContant:any=[];
  modalId:any;
  show=true;
  term:any;
  totalLength:any;
  page:number=1;
  


  constructor(private src:EcartserService,private router:Router) { }

  ngOnInit(): void {
    
  }

  getvagetables(){
    this.show=false
    this.src.GetVagetables().subscribe((data)=>{this.LoadContant=data,
    this.totalLength=this.LoadContant.length,console.log(this.totalLength)})
  }
  getfruits(){
    this.show=false
    this.src.GetFurits().subscribe((data)=>{this.LoadContant=data,
      this.totalLength=this.LoadContant.length,console.log(this.totalLength)})
  }

  getgrocery(){
    this.show=false
    this.src.GetGrocerries().subscribe((data)=>{this.LoadContant=data,
      this.totalLength=this.LoadContant.length,console.log(this.totalLength)})
  }

  getid(event:any){
    this.modalId = event
    // console.log("get :" , event.target.getAttribute('data-bs-target'))
  }

  addCart(itm:any){
 
  this.src.AddCartItem(itm).subscribe(data=>{
    
  })
  this.router.navigate(['OrderList'])
}
}
