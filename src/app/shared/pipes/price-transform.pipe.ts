import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTransform'
})
export class PriceTransformPipe implements PipeTransform {

  transform(value: number, isUnion?: boolean): unknown {
    return isUnion ? `$ ${value / 10}` : `CN￥ ${value}`;
  }

}
