import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModuloPopper } from 'src/util';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  target: number = 1660737600;
  days: number = -1;
  hours: number = -1;
  minutes: number = -1;
  seconds: number = -1;

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.updateNumbers();
    setInterval(() => this.updateNumbers(), 100)
  }

  updateNumbers() {
    let ts = new Date().getTime() / 1000;
    let diff = Math.abs(this.target - Math.round(ts));
    let popper = new ModuloPopper(diff);
    this.seconds = popper.pop(60);
    this.minutes = popper.pop(60);
    this.hours = popper.pop(24);
    this.days = popper.total;
    this.updateTitle();
  }

  updateTitle() {
    let titleStr = "BT-Abgabe: "
    if (this.days)
      titleStr += this.days + "d "
    titleStr += this.hours.toString().padStart(2, "0") + ":"
    titleStr += this.minutes.toString().padStart(2, "0") + ":"
    titleStr += this.seconds.toString().padStart(2, "0")
    this.titleService.setTitle(titleStr);
  }
}
