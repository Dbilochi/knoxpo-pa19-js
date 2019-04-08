import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempKelvin'
})
export class TempKelvinPipe implements PipeTransform {
  public temp
  transform(value: any, args?: any): any {
    this.temp = value - 273.15
    return this.temp;
  }

}
