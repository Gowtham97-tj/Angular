import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit{
  ngOnInit(): void {
  }
  parentMessage: string = ""
  receivedMessage: string = ""

  receiveMessageMethod(message: string)
  {
    this.receivedMessage = message;
  }
}
