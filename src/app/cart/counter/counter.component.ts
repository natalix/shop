import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Output() increment = new EventEmitter<any>();
  constructor() { }

  incrementClick() {
    this.increment.emit();
  }

  decrement() {
  }

  ngOnInit() {
  }

}
