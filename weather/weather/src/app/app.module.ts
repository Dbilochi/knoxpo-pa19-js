import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WeatherService} from './_api/weather.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { HttpClientModule } from "@angular/common/http";
import { GetDayPipe } from './get-day.pipe';
import { TempKelvinPipe } from './temp-kelvin.pipe';
import { CheckTimePipe } from './check-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    GetDayPipe,
    TempKelvinPipe,
    CheckTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
