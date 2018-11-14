import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ItemComponent } from './item/item.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ],
  declarations: [
    CartComponent,
    ItemComponent,
    CounterComponent
  ]
})
export class CartModule { }
