import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { BrowserModule } from '@angular/platform-browser';
import { SortComponent } from './sort/sort.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    ProductsComponent
  ],
  declarations: [
    ProductsComponent,
    SortComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
