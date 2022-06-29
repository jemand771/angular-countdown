import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css'],
  animations: [
    trigger("position", [
      state("up", style({
        top: 0,
      })),
      state("down", style({
        top: 100
      })),
      transition("down => up", [
//         animate("0s")
      ]),
      transition("up => down", [
        animate("500ms")
      ])
    ])
  ]
})

export class DigitComponent implements OnInit {

  @Input() digit!: number;
  curDigit?: number;
  prevDigit?: number;
  isUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes["digit"];
    this.prevDigit = change.previousValue;
    this.isUp = true;
    this.curDigit = change.currentValue;
    setInterval(() => this.isUp = false, 100);
  }
}
