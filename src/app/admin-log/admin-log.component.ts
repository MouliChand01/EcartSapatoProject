import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {
  wishigTime:any;
  newtime:any;
  amOrpm:any;
  userId:any;
  email:any;
  password:any;
  wish1=false;
  wish2=false;
  wish3=false;
  pass=false;
  adminData=true
  
  constructor(private datepipe:DatePipe,private router:Router) {
    let sysTime = this.datepipe.transform((new Date),"h");
    this.amOrpm = this.datepipe.transform((new Date), "a")
    this.wishigTime =Number(sysTime);
  }

  ngOnInit(): void {
    this.getwish(this.wishigTime);
    
  }

  getwish(time:number){
    if(this.amOrpm == "AM" && time<12 ){
      this.wish1=true
    }
    if(this.amOrpm == "PM"){
       this.newtime = 12 + this.wishigTime;
      if(this.newtime > 12 && this.newtime <=16){
        this.wish2=true
      }
      if(this.newtime >16 && this.newtime <=20){
        this.wish3=true
      }
    }
  }

  AdminLogin(){
  let myId = localStorage.getItem("AdminId");
  if(this.userId === myId){
    this.pass=true;
    if(Number(this.password) === 6677){                     // password we are taken as 6677
      alert("Now u can add the podutcs");
      this.router.navigate(['NewProduct'])
    }
  }
  else{
    alert(`${this.userId} ur not a Admin u have not access to add the products`)
  }
}

}
