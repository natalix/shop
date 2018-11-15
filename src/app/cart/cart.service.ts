import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartItemModel } from 'src/app/model/cart-item.interface';

class CartItem {

  quantity = 1;
  price: number;
  totalPrice: number;

  constructor(product: CartItemModel) {
    Object.assign(this, product);
    this.totalPrice = product.price;
  }

  increaseQuantity() {
    this.quantity += 1;
    this.totalPrice = this.price * this.quantity;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart$ = new BehaviorSubject([]);
  public cart$ = this._cart$.asObservable();

  constructor() { }

  addProductToCart(product) {
    const cartItem = new CartItem(product);
    let isPresentInCart = false;
    const cartItems = this._cart$.getValue();

    cartItems.forEach(item => {
      if (item.id === product.id) {
        item.increaseQuantity();
        isPresentInCart = true;
      }
    });

    return isPresentInCart ? this._cart$.next([...cartItems]) : this._cart$.next([...cartItems, cartItem]);
  }

  refreshTotalCartCount() {
    console.log('total cart');
  }
}
