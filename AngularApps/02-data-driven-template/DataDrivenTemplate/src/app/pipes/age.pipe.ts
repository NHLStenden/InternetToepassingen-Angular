import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): number {
    const now : Date = new Date();
    return (now.getTime() - value.getTime()) / 1000 / 60 / 60 / 24 / 365;
  }

}
