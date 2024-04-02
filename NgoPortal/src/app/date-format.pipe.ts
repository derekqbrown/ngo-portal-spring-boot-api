import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date:Date) {
    return date.toLocaleString().split('T')[0];
  }

}
