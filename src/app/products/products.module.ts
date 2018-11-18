import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { BrowserModule } from '@angular/platform-browser';
import { SortComponent } from './sort/sort.component';
import { ProductComponent } from './product/product.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  exports: [
    AngularFontAwesomeModule,
    ProductsComponent,
    ProductComponent
  ],
  declarations: [
    ProductsComponent,
    SortComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
