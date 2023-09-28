import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count:number;

  constructor() {
    this.count = 0;
  }

  onClick() {
    this.count = this.count+1;
  }

  getCount() {
    return this.count;
  }

}
