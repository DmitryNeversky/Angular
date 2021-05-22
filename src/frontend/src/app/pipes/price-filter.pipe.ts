import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "../models/item";

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  // @ts-ignore
  transform(items: Item[], min: number, max: number): Item[] {

    if(min == 0 && max == 0)
      return items

    else if(min == 0 && max != 0)
      return items.filter(x => x.price <= max)

    else if(min != 0 && max == 0)
      return items.filter(x => x.price >= min)

    else if(min != 0 && max != 0)
      return items.filter(x => x.price >= min && x.price <= max)

  }

}
