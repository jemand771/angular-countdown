import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-countdown';
  @ViewChild("scale") div: any;
  scale: number = 0;

  constructor() {
    window.addEventListener("resize", () => this.resize())
  }

  ngAfterViewInit(): void {
    this.resize()
  }

  resize() {
    let elm = this.div.nativeElement
    this.scale = Math.min(window.innerWidth / elm.clientWidth, window.innerHeight / elm.clientHeight) * 0.75
  }

  getScale() {
    return {
      transform: "scale(" + this.scale + ")"
    };
  }
}
