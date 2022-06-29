import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.css']
})
export class NumberCardComponent implements OnInit {

  @Input() number!: number;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

  digit1(){
    return (this.number / 10) | 0;
  }

  digit2(){
    return this.number % 10;
  }
}
