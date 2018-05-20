import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intervalCounter: number;

  onIntervalFired(val){
    this.intervalCounter = val;
  }
}
