import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

class CartItem {

  quantity = 1;
  totalPrice: number;

  constructor(product: any) {
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
    const cartItem = new CartItem(product)
    console.log(cartItem);
    const cartItems = this._cart$.getValue()
  
    this._cart$.next([...cartItems, cartItem]);
  }
}
