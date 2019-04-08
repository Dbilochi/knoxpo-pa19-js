import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkTime'
})
export class CheckTimePipe implements PipeTransform {
  public test:boolean
  transform(value: any, args?: any): any {
    this.test = value.includes("15:00:00");
    return this.test;
  }

}
