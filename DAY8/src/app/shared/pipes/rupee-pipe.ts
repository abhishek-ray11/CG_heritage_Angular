import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee',
  standalone:true
})
export class RupeePipe implements PipeTransform {

  transform(value:number): string {

    return '₹'+value.toLocaleString('en-IN',{
      minimumFractionDigits:2
    });

  }

}