import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product;

  @Output() increment = new EventEmitter<any>();
  @Output() decrement = new EventEmitter<any>();

  constructor() { }

  incrementClick() {
    this.increment.emit(this.product);
  }

  decrementClick() {
    this.decrement.emit(this.product);
  }

  ngOnInit() {
  }
}
