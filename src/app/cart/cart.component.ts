import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  buttonName: string;
  cart$: Observable<any>;
  summaryPrice$;
  toggle = false;

  constructor(private cartService: CartService) { }

  changeButtonName() {
    this.buttonName === 'rozwiń' ? this.buttonName = 'ukryj' : this.buttonName = 'rozwiń';
    this.toggle = true;
  }

  increment(product) {
    this.cartService.dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  decrement(product) {
    this.cartService.dispatch({ type: 'REMOVE_PRODUCT', payload: product })
  }

  ngOnInit() {
    this.buttonName = 'rozwiń';
    this.cart$ = this.cartService.cart$;
    this.summaryPrice$ = this.cartService.sumCart();
  }
}
