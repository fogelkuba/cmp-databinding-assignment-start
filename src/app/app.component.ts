import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intervalCounter: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(val){
    this.intervalCounter = val;
    if (val % 2 === 0) {
      this.evenNumbers.push(val);
    }else{
      this.oddNumbers.push(val);
    }
  }
}
