import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name:  `custom_date`
})
export class CustomDate implements PipeTransform {
  transform(value: Date, args?: any): string {
    const pipe = new DatePipe('en-US');
    const time = pipe.transform(value, 'shortTime');
    const date = pipe.transform(value, 'mediumDate');
    return `${time} | ${date}`;
  }
}
