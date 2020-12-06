import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strip'
})
export class StripPipe implements PipeTransform {

  transform(text: string, separator: string): string {
    return text.split(separator).join(' ');
  }

}
