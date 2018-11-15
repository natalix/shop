import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { sortBy } from 'lodash';

const PRODUCTS_URL = "products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductData$(): Observable<any[]> {
    return this.http
    .get<any>(PRODUCTS_URL)
  }

  getProductSortedByName() {
    return this.getProductData$()
      .pipe(
        map(products => sortBy(products, ({ name }) => name))
      );
  }

  getProductSortedByPrice() {
    return this.getProductData$()
      .pipe(
        map(products => sortBy(products, ({ price }) => price))
      );
  }
}
