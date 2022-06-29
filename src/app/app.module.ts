import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { NumberCardComponent } from './number-card/number-card.component';
import { DigitComponent } from './digit/digit.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    NumberCardComponent,
    DigitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
