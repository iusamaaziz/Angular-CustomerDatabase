import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PhonesComponent } from './phones/phones.component';
import { AddressesComponent } from './addresses/addresses.component';
import { SharedService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    PhoneComponent,
    MainComponent,
    NavComponent,
    PhonesComponent,
    AddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
