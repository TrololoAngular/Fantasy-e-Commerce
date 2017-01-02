import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe {
    transform(products: any[], filterText: string): any[] {
        filterText = filterText || '';
        if (filterText === '') {
            return products;
        }

        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(filterText.toLowerCase()));
        return filteredProducts;
    }
}
