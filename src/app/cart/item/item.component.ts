import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() product;

  @Output() increment = new EventEmitter<any>();
  @Output() decrement = new EventEmitter<any>();

  incrementClick(): void {
    this.increment.emit(this.product);
  }

  decrementClick(): void {
    this.decrement.emit(this.product);
  }
}
