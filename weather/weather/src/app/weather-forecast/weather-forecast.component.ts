import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../_api/weather.service'

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  public response: any;
  public data: any;
  constructor(public weather:WeatherService) { }

  ngOnInit() {
    this.weather.getData().subscribe(res => {
      this.response = res;
      this.data = this.response.list;
    });
  }

}
