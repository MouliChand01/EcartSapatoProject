import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutProductsComponent } from './about-products/about-products.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EcartserService } from './ecartser.service';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {NgxCaptchaModule} from 'ngx-captcha';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { DatePipe } from '@angular/common';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutProductsComponent,
    OrderItemsComponent,
    RegisterComponent,
    ContactUsComponent,
    WildcardComponent,
    AdminLogComponent,
    AdminAddProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    NgxCaptchaModule
    
  ],
  providers: [EcartserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
