import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Observable } from 'rxjs/internal/Observable';
import { CartService } from 'src/app/cart/cart.service';
import { CartItemModel } from '../model/cart-item.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<CartItemModel[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProductData$();
  }

  sortByName(): void {
    this.products$ = this.productsService.getProductSortedByName();
  }

  sortByPrice(): void {
    this.products$ = this.productsService.getProductSortedByPrice();
  }

  addToCart(product: CartItemModel): void {
    this.cartService.dispatch({ type: 'ADD_PRODUCT', payload: product });
  }
}
