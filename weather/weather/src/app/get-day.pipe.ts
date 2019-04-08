import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDay'
})
export class GetDayPipe implements PipeTransform {
  public day:string
  transform(value: any, args?: any): any {
    var birthday = new Date(value);
    var day1 = birthday.getDay();
    switch(day1) {
   case 1: {
      this.day  = 'Monday'
      break;
   }
   case 2: {
      this.day = 'Tuesday'
      break;
   }
   case 3: {
      this.day = 'Wednesday'
      break;
   }
   case 4: {
      this.day = 'Thursday'
      break;
   }
   case 5: {
      this.day = 'Friday'
      break;
   }
   case 6: {
      this.day = 'Saturday'
      break;
   }
   case 0: {
      this.day = 'Sunday'
      break;
   }
   default: {
      //statements;
      break;
   }
}
    return this.day;
  }

}
