import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberIncremented(num: number): void{
    if ((num > 1 && num%2 == 0) ||
        (num == 0)){
      this.evenNumbers.push(num);
    } else {
      this.oddNumbers.push(num);
    }
  }
}
