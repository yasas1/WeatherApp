import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './Components/weather-home/weather-home.component';
import { LogInOutComponent } from './Components/log-in-out/log-in-out.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    LogInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule ,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    AuthModule.forRoot({
      domain: 'dev-iy3se4l6.us.auth0.com',
      clientId: 'HueT5CbDFWtrMv8PXdiQRITACRBv8qI2'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
