import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
  <div>
  <button mat-button (click)= "addToCounter()">+</button>
  {{this.count}}
  <button mat-button [disabled]="count===0" (click)="removeFromCounter()">-</button>
</div>
  `,
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  @Input() count = 0;
  @Output() countChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addToCounter() {
    this.sendCount(this.count + 1);
  }

  removeFromCounter() {

    this.sendCount(this.count - 1);
  }

  sendCount(num) {
    this.countChange.emit(num);
  }
}
