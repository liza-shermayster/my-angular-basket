import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() array: any[] = ['aaa', 'bbb', 'ccc'];
  @Output() clickButton = new EventEmitter();

  onClick(e) {
    this.clickButton.emit(e);
  }
}
