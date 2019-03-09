import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
    this.count++;
    console.log(this.count);
    this.sendCount();
  }

  removeFromCounter() {
    this.count--;
    this.sendCount();
  }

  sendCount() {
    this.countChange.emit(this.count);
  }


}
