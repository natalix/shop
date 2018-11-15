import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product;

  constructor() { }

  increment() {
    
    console.log(this.product.quantity);
  }

  ngOnInit() {
  }
}
