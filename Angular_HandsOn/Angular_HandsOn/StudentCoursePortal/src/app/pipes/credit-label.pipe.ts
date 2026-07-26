import { Pipe, PipeTransform } from '@angular/core';

/**
 * Hands-On 3 Task 3: Custom Pipe
 * Transforms numeric credit count into human-readable label.
 * 1 -> '1 Credit', 2+ -> 'X Credits', null/0 -> 'No Credits'
 */
@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || value === 0) {
      return 'No Credits';
    }
    if (value === 1) {
      return '1 Credit';
    }
    return `${value} Credits`;
  }
}
