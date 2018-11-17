import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { sortBy } from 'lodash';
import { CartItemModel } from '../model/cart-item.interface';

const PRODUCTS_URL = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductData$(): Observable<CartItemModel[]> {
    return this.http
    .get<any>(PRODUCTS_URL);
  }

  getProductSortedByName(): Observable<CartItemModel[]> {
    return this.getProductData$()
      .pipe(
        map(products => sortBy(products, ({ name }) => name))
      );
  }

  getProductSortedByPrice(): Observable<CartItemModel[]> {
    return this.getProductData$()
      .pipe(
        map(products => sortBy(products, ({ price }) => price))
      );
  }
}
