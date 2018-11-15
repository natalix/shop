import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  buttonName: string;
  cart$: Observable<any>;

  constructor(private cartService: CartService) { }

  changeButtonName() {
    this.buttonName === 'rozwiń' ? this.buttonName = 'ukryj' : this.buttonName = 'rozwiń';
  }

  ngOnInit() {
    this.buttonName = 'rozwiń';
    this.cart$ = this.cartService.cart$;
    this.cart$
      .subscribe(
        x => { if (x.length) {this.changeButtonName()}}));
    this.cart$.subscribe(x => console.log(x));
  }

  ngOnChanges() {
    this.cartService.refreshTotalCartCount();

  }
}
