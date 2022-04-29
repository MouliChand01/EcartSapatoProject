import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartserService } from '../ecartser.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {
 
  selectedUrl:any;
  NewData = {title:"",price:"",src:""}

  constructor(private ser:EcartserService,private router:Router) { }

  ngOnInit(): void {
  }

  AddProduct(){
    // console.log(this.NewData)
    if(this.selectedUrl === "Vagetables"){
      this.ser.AddVagetables(this.NewData).subscribe();
      this.router.navigate(['About']);
    }
    if(this.selectedUrl === "fruits"){
      this.ser.AddFurits(this.NewData).subscribe();
      this.router.navigate(['About']);
    }
    if(this.selectedUrl === "grocerries"){
      this.ser.AddGrocerries(this.NewData).subscribe();
      this.router.navigate(['About']);
    }

  }
  onFlieselected(event:any){
    if(event.target?.files[0]){
      const reader=new FileReader();
      reader.onload=(e:any)=>{
        const img=new Image();
        img.src=e.target.result;
        img.onload=(rs)=>{
          const imagebase = e.target.result;
          this.NewData.src = imagebase;
          return imagebase
        };
      };
      reader.readAsDataURL(event.target.files[0])
    }
  }
  onselected(event:any){
    this.selectedUrl = event.target.value
  }

}
