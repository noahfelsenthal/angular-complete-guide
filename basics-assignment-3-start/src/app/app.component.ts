import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = false;
  buttonClicks = [];
  clickCount = 1;

  onClickButton() {
    this.displayText === true
      ? this.displayText = false
      : this.displayText = true;

    this.buttonClicks.push(this.clickCount);
    this.clickCount++;
  }
}
