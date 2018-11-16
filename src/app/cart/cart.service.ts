import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

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

  public dispatch(action) {
    this._dispatch$.next(action);
  }

  private handleAction(action) {
    const state = this._cart$.getValue();
    const newState = this.reduceState(state, action);
   
    this._cart$.next(newState);
  }

  private reduceState(state, action) {
    switch (action.type) {
      case 'ADD_PRODUCT': 
        const initialQuantity = 1;
        const createCartItem = (product, quantity) => Object.assign(product, { quantity });
        const mapState = (item, { quantity }) => (item.id === product.id) ? createCartItem(product, quantity + 1) : item;
        const product = action.payload;
        const existingProduct = state.find(cartItem => cartItem.id === product.id);

        return existingProduct
          ? state.map(item => mapState(item, existingProduct))
          : [...state, createCartItem(product, initialQuantity)];

      case 'REMOVE_PRODUCT':
        const remove = action.payload;
        const mapToRemove = (item) => (item.id === remove.id) ? Object.assign(item, { quantity: item.quantity - 1 }) : item;
        
        const removeItem = state.find(cartItem => cartItem.id === remove.id);

        return removeItem.quantity > 1 
          ? state.map(item => mapToRemove(item))
          : state.filter(item => item.id !== remove.id);
    }
  }

  sumCart() {
    return this.cart$.pipe(
        map(products => products.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0))
      )
  }
}
