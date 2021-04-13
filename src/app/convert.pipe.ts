import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: unknown, targetUnits: string): unknown {
    if (!value) {
      return '';
    }
    switch (targetUnits) {
      case 'km':
        return (value as number) * 1.60934;
      case 'm':
        return (value as number) * 1.60934 * 1000;
      case 'cm':
        return (value as number) * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');
    }
  }
}
