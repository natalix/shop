import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from 'src/app/products/products.module';
import { CartModule } from 'src/app/cart/cart.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductsModule,
    CartModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
