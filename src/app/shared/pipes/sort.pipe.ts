import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe {
  transform(products: any[], options: string[]): any[] {
    const propertyName: string = options[0] || 'title';
    const order: string = options[1] || 'ascending';

    if (!products || products.length === 0) {
      return undefined;
    }

    const sortedProducts = products.sort((first: any, second: any): number => {
      let comparison;

      if(typeof first[propertyName] === "number") {
        if(first[propertyName] > second[propertyName]){
          comparison = 1;
        } else if (first[propertyName] < second[propertyName]) {
          comparison = -1;
        } else {
          comparison = 0;
        }
      } else {
        comparison = first[propertyName].localeCompare(second[propertyName]);
      }

      if (order === 'descending' || order === "Descending") {
        return -comparison;
      }

      return comparison;
    });

    return sortedProducts;
  }
}
