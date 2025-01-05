import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  homeText = 'Hello parent!';

  evList: string[] = [];

    childButtonClicked(event: string) {
        this.evList.push(event);
    }
}

