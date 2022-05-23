import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EcartserService {

 vagetables= 'http://localhost:3000/ListOfVagetables';
 fruits='http://localhost:3000/ListOfFruits';
 grocerries='http://localhost:3000/ListOfGrocerries';
 newuser='http://localhost:3000/NewUsersList';
 myorders='http://localhost:3000/MyordersList';

  constructor(private http:HttpClient) { }

  private subject = new BehaviorSubject<any>('Hello');
  private subject1 = new BehaviorSubject<any>('bye');
  private subject2 = new BehaviorSubject<any>('amout')

  // ########## Getting data From Api ######### //
  GetVagetables(){
   return this.http.get(this.vagetables)
  }
  GetFurits(){
    return this.http.get(this.fruits)
  }
  GetGrocerries(){
    return this.http.get(this.grocerries)
  }
  GetOrderdItems(){
    return this.http.get(this.myorders)
  }
  GetNewuser(){
    return this.http.get(this.newuser)
  }

   // ########## Adding data From Api ######### //

   AddNewUser(data:any){
     return this.http.post(this.newuser,data)
   }

   AddCartItem(data:any){
     return this.http.post(this.myorders,data)
    }
   catItems(){
    return this.http.get(this.myorders)
  }

   // ########## updateing data From Api ######### //

   UpdateUserPassword(id:any,data:any){
     return this.http.put(`${this.newuser}/${id}`,data)
   }

    // ########## adding data to the Api's ######### //

  AddVagetables(data:any){
    return this.http.post(this.vagetables,data)
  }
  AddFurits(data:any){
    return this.http.post(this.fruits,data)
  }
  AddGrocerries(data:any){
    return this.http.post(this.grocerries,data)
  }

  // ########## implementing Subjects for data sharing Name orderlist ######### //

  sendName(data:string){
    this.subject.next({text:data})
  }

  getName(){
    return this.subject.asObservable()
  }

  delateOrdersData(id:any){
    return this.http.delete(`${this.myorders}/${id}`)
  }
  
  // ########## implementing Subjects for data sharing home to paymentgetway ######### //


  sendObject(data:any){
    this.subject1.next(data)
  }

  getObject(){
    return this.subject1.asObservable()
  }

  sendtotal(data:any){
    this.subject2.next(data)
  }

  gettotal(){
    return this.subject2.asObservable()
  }
  

}
