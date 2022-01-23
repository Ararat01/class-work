import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascii'
})
export class AsciiPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split(' ').map(word => word.split('.').map(n => String.fromCharCode(parseInt(n))).join('')).join(' ');
  }

}
