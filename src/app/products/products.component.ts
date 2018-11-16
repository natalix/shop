import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Observable } from 'rxjs/internal/Observable';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<any[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProductData$();
  }

  sortByName() {
    this.products$ = this.productsService.getProductSortedByName();
  }

  sortByPrice() {
    this.products$ = this.productsService.getProductSortedByPrice();
  }

  addToCart(product) {
    this.cartService.dispatch({ type: 'ADD_PRODUCT', payload: product });
  }
}
