import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "../models/item";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Item[], arg: string): Item[] {
    if(!arg.trim())
      return value

    return value.filter(x => x.name.includes(arg));
  }

}
