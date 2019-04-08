import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(public http: HttpClient) { }

    getData(){
      return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=Surat&appid=3c7b67eb8df1467e74659603194d421d');
  }
}
