import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: Observable<any>;
  summaryPrice$: Observable<any>;
  buttonName = 'rozwiń';
  isShown = false;

  constructor(private cartService: CartService) { }

  toggle() {
    this.buttonName === 'rozwiń' ?  this.show() : this.hide();
  }

  show() {
    this.isShown = true;
    this.buttonName = 'ukryj';
  }

  hide() {
    this.isShown = false;
    this.buttonName = 'rozwiń';
  }

  increment(product) {
    this.cartService.dispatch({ type: 'ADD_PRODUCT', payload: product });
  }

  decrement(product) {
    this.cartService.dispatch({ type: 'REMOVE_PRODUCT', payload: product });
  }

  ngOnInit() {
    this.cart$ = this.cartService.cart$;
    this.summaryPrice$ = this.cartService.sumCart();
    this.summaryPrice$.subscribe(x => {if (x > 0) { this.show(); }});
  }
}
