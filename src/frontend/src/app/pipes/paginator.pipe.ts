import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

    transform(array: any[], length: number, index: number, size: number): any[] {
        return array
    }

}
