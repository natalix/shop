import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from 'src/app/model/cart-item.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: CartItemModel;

  @Output() productChosen = new EventEmitter<any>();

  addToCart(item: CartItemModel): void {
    this.productChosen.emit(item);
  }
}
