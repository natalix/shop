import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Output() sortByName = new EventEmitter<any>();
  @Output() sortByPrice = new EventEmitter<any>();

  sortByNameClick(): void {
    this.sortByName.emit();
  }

  sortByPriceClick(): void {
    this.sortByPrice.emit();
  }
}
