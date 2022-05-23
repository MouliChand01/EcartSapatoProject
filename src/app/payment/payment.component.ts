import { Component, Input, OnInit } from '@angular/core';
import { EcartserService } from '../ecartser.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  handler:any = null;
  UserObject:any;
  totalAmount:any;

  constructor(private ser:EcartserService) { }
  
  ngOnInit() {
    this.loadStripe();
    this.getdata();
    this.ser.gettotal().subscribe((data)=>{this.totalAmount=data,console.log(data)});

  }
 
  payment(amount: any) {    
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L2UDASBo8fGEf0dFhUnwryuLCjv9gg02fi8o6fbWnUMatlQm8FmXccH3jMBE9JmmfkFKR2RP4FXry5JA7fdKIn200pAoxQKkT',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Payment Success!!');
      }
    });
 
    handler.open({
      name: 'Angular_stripe',
      description: 'PaymentGatWay For EcartProduct',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L2UDASBo8fGEf0dFhUnwryuLCjv9gg02fi8o6fbWnUMatlQm8FmXccH3jMBE9JmmfkFKR2RP4FXry5JA7fdKIn200pAoxQKkT',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('token created Success!!');
          }
        });
      }
       window.document.body.appendChild(s);
    }
  }
  getdata(){
    this.ser.getObject().subscribe((msg)=>console.log(msg))
  }
}
