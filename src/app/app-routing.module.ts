import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutProductsComponent } from './about-products/about-products.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { RegisterComponent } from './register/register.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomePageComponent},
  {path:"About",component:AboutProductsComponent},
  {path:"Contact",component:ContactUsComponent},
  {path:"OrderList",component:OrderItemsComponent},
  {path:"Register",component:RegisterComponent},
  {path:"AdminLogin",component:AdminLogComponent},
  {path:"NewProduct",component:AdminAddProductComponent},
  {path:"**",component:WildcardComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
