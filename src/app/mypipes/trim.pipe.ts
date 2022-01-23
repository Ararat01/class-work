import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})

export class TrimPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let divisors = []
    for(let i = 1; i <= value; i++) {
      if(value % i == 0) {
        divisors.push(i)
      }
    }
    return `Divisors of ${value} are ${divisors}`;
  }

}
