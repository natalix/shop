import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Output() sortByName = new EventEmitter<any>();
  @Output() sortByPrice = new EventEmitter<any>();

  constructor() { }

  sortByNameClick() {
    this.sortByName.emit();
  }

  sortByPriceClick() {
    this.sortByPrice.emit();
  }

  ngOnInit() {
  }

}
