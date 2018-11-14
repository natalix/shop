import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<any[]>;

  constructor(private service: ShopService) { }

  ngOnInit() {
    this.products$ = this.service.getTableData$();
  }

  sortByName(){
    this.products$ = this.products$.pipe(
      map(products => sortBy(products, products => products.name)),
    );
  }
}
