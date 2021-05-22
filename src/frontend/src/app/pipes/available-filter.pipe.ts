import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "../models/item";

@Pipe({
  name: 'availableFilter'
})
export class AvailableFilterPipe implements PipeTransform {

  transform(items: Item[], available: boolean): Item[] {
    if(!available)
      return items

    return items.filter(x => x.count > 0);
  }

}
