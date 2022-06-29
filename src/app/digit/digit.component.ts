import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css']
})
export class DigitComponent implements OnInit {

  @Input() digit!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
