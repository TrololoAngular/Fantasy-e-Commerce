import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe {
  transform(products: any[], categoryId: string): any[] {
    categoryId = categoryId || '';
    if (categoryId === '') {
      return products;
    }

    const filteredProducts = products.filter(product => product.bookCategory == categoryId );
    return filteredProducts;
  }
}
