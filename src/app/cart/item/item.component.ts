import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product;

  constructor() { }

  increment() {
    this.product.quantity += 1;
  }

  decrement() {
    this.product.quantity -= 1;
  }

  ngOnInit() {
  }
}
