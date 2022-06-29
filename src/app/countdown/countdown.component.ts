import { Component, OnInit } from '@angular/core';
import { ModuloPopper } from 'src/util';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  target: number = 1656515741;
  days: number = -1;
  hours: number = -1;
  minutes: number = -1;
  seconds: number = -1;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.updateNumbers(), 100)
  }

  updateNumbers(){
    let ts = new Date().getTime() / 1000;
    let diff = this.target - Math.round(ts);
    let popper = new ModuloPopper(diff);
    this.seconds = popper.pop(60);
    this.minutes = popper.pop(60);
    this.hours = popper.pop(24);
    this.days = popper.pop(1);;
    console.log("update");
  }
}
