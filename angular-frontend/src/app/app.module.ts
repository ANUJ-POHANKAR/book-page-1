import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormComponent } from './form/form.component'; // Import the Form component
import { AppComponent } from './app.component'; // Root component, if you have one
import { OrderService } from './services/order.service'; // Import the Order service

@NgModule({
  declarations: [
    AppComponent,    // Declare the root component
    FormComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Import HttpClientModule to use HTTP services
  ],
  providers: [
    OrderService, // Provide the Order service for dependency injection
  ],
  bootstrap: [AppComponent] // Bootstrap the root component (AppComponent)
})
export class AppModule { }


 
