import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ItemComponent } from './item/item.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [
    CartComponent,
    AngularFontAwesomeModule
  ],
  declarations: [
    CartComponent,
    ItemComponent
  ]
})
export class CartModule { }
