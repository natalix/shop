import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;

  @Output() productChosen = new EventEmitter<any>();

  constructor() { }

  addToCart(item) {
    this.productChosen.emit(item);
  }

  ngOnInit() {
  }

}
