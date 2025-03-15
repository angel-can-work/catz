import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(breeds: any[], filter: string): any {
    if(!!breeds && !!filter) {
      return breeds.filter(breed => breed.name.toLowerCase().includes(filter.toLocaleLowerCase()));
    }
    return breeds || [];
  }

}
