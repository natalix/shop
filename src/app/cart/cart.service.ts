import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItemModel } from '../model/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart$ = new BehaviorSubject([]);
  private _dispatch$ = new Subject();
  public cart$ = this._cart$.asObservable();

  constructor() {
    this._dispatch$
      .subscribe(action => this.handleAction(action));
  }

  public dispatch(action): void {
    this._dispatch$.next(action);
  }

  private handleAction(action): void {
    const state = this._cart$.getValue();
    const newState = this.reduceState(state, action);

    this._cart$.next(newState);
  }

  private reduceState(state, action): CartItemModel[] {
    switch (action.type) {
      case 'ADD_PRODUCT':
        const productToAdd = action.payload;
        const existingProduct = state.find(cartItem => cartItem.id === productToAdd.id);
        const initialQuantity = 1;
        const createCartItem = (product, quantity) => ({ ...product, quantity });
        const increaseQuantity  = (cartItem, product) =>
          (cartItem.id === product.id)
            ? createCartItem(product, cartItem.quantity + 1)
            : cartItem;

        return existingProduct
          ? state.map(item => increaseQuantity (item, existingProduct))
          : [...state, createCartItem(productToAdd, initialQuantity)];

      case 'REMOVE_PRODUCT':
        const itemToRemoveId = action.payload;
        const itemToRemove  = state.find(cartItem => cartItem.id === itemToRemoveId);
        const decreaseQuantity = (item, toRemoveId) =>
          (item.id === toRemoveId)
            ? {...item, quantity: item.quantity - 1 }
            : item;

        return itemToRemove.quantity > 1
          ? state.map(item => decreaseQuantity(item, itemToRemoveId))
          : state.filter(item => item.id !== itemToRemoveId);
    }
  }

  sumCart(): Observable<number> {
    const sumPricePredicate = (sum, product) => sum + (product.price * product.quantity);

    return this.cart$.pipe(
        map(products => products.reduce(sumPricePredicate, 0))
      );
  }
}
