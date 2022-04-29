import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartserService } from '../ecartser.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userId:any;
  NewPassword:any;
  click=true;
  click1=false;
  click2=false;
  UserDate:any;

  constructor(private src:EcartserService ,private router:Router) { }
   
  ngOnInit(): void {
     console.log(this.UserDate)
    }

  GetAction(){
    this.GetUserData();
    let data1=this.UserDate.find((val:any)=>val.Name === this.userId);
    if(data1.Name === this.userId){
      this.click=false;
      this.click1=true;
    }
    else if(data1.Name !== this.userId){
      alert(`${this.userId} no data matchs in database`);
      this.click2=true;
      this.Restart()
    }
   }
   
  Restart(){
    this.router.navigate(['Contact'])
  }

  GetUserData(){
     this.src.GetNewuser().subscribe((data)=>this.UserDate=data);
    }

  GetUpdatePass(){
    let data=this.UserDate.find((val:any)=>val.Name === this.userId);
    if(data.Name === this.userId){
       data.Password =this.NewPassword ;
       data.ConfirmPassword =this.NewPassword ;
       this.src.UpdateUserPassword(data.id,data).subscribe() ;
       alert(`${data.Name} ur Password was updated`) ;
       this.router.navigate(['Home']) ;
      }
    }
}


 