import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchCategory'
})
export class SearchCategoryPipe implements PipeTransform {

    transform(array: any[], arg: number): any[] {
        if (arg == 0)
            return array

        return array.filter(x => x.category == arg);
    }

}
