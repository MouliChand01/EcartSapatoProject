import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EcartserService } from '../ecartser.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  Name: any;
  PassWord: any;
  UserData: any;
  alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '*']
  str1: any;
  str2: any;

  constructor(private router: Router, private src: EcartserService) { }

  

  ngOnInit(): void {
    this.GetUserData()
    this.funactionCap()
  }

  GotoRegister() {
    this.router.navigate(['Register'])
  }

  GetUserData() {
    this.src.GetNewuser().subscribe((data) => this.UserData = data)
  }

  funactionCap() {
    var a = this.alpha[Math.floor(Math.random() * 41)];
    var b = this.alpha[Math.floor(Math.random() * 41)];
    var c = this.alpha[Math.floor(Math.random() * 41)];
    var d = this.alpha[Math.floor(Math.random() * 41)];
    var e = this.alpha[Math.floor(Math.random() * 41)];
    var sum = a + b + c + d + e;
    this.str1 = sum
    }

  GotoSign() {
    let data=this.UserData.find((val:any)=>val.Name === this.Name);
    this.src.sendName(this.Name);
    this.src.sendObject(data);
    if(this.str1 != this.str2){
      alert('Wrong capta Please give correctone')
    }
    if(data && data.Password === this.PassWord && this.str1 === this.str2){
      this.router.navigate(['About']);
     
    }
    else{
      alert('Wrong PassWord Please give correctone')
    }
  }

  ForgetPassword(){
    this.router.navigate(['Contact'])
  }
}
