import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTransform'
})
export class PriceTransformPipe implements PipeTransform {

  transform(value: number, isUnion?: boolean): string {
    return isUnion ? `$ ${value / 10}` : `CN￥ ${value}`;
  }

}
