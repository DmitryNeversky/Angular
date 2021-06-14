import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

    transform(array: any[], arg: string): any[] {
        if (arg.length == 0)
            return array

        return array.filter(x => x.name.includes(arg));
    }

}
