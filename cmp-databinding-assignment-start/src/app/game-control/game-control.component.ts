import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  counter = 0;
  interval;

  @Output('countIncremented') intervalCounter = new EventEmitter<number>();

  onStartGame(){
      this.interval = setInterval(() => {
        this.intervalCounter.emit(this.counter);
        this.counter++;
      }, 1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
