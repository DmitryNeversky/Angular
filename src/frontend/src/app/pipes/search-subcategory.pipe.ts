import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchSubCategory'
})
export class SearchSubcategoryPipe implements PipeTransform {

  transform(array: any[], arg: number): any[] {
    if(arg == 0)
      return array

    return array.filter(x => x.subCategory == arg);
  }

}
