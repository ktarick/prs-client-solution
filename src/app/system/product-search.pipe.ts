import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class'
import { Vendor } from '../vendor/vendor.class'

@Pipe({
  name: 'search'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], criteria: string): Product[] {
    if(criteria == "")
      return products;
    let arrOut: Product[] = [];
    for(let product of products){
      if(product.partNumber.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(product);
        continue;
      }
      if(product.name.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(product);
        continue;
      }
      if(product.unit.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(product);
        continue;
      }
    }
    return arrOut;
  }
}
