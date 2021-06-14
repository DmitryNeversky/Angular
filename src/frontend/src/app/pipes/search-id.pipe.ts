import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchId'
})
export class SearchIdPipe implements PipeTransform {

    transform(array: any[], arg: string): any[] {
        if (arg.length == 0)
            return array

        return array.filter(x => x.id.toString().includes(arg));
    }

}
