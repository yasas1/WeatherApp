import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './Components/weather-home/weather-home.component';
import { LogInOutComponent } from './Components/log-in-out/log-in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    LogInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
