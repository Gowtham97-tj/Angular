import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() message : string = ""
  @Output() messageEvent = new EventEmitter<string>();
  messageToParent: string = ""

  sendMessage()
  {
    this.messageEvent.emit(this.messageToParent)
  }
}
