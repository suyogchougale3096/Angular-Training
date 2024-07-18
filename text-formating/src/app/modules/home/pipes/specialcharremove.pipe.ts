import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialcharremove',
  pure : false
})
export class SpecialcharremovePipe implements PipeTransform {

  transform(value : string): string {
    return value.replace(/[^a-zA-Z0-9 ]/g, '');
  }
}
