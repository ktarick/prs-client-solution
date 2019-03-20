import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  searchCriteria: string = ""

  constructor(
    private productsvc: ProductService,
    private syssvc: SystemService 
  ) { }

  ngOnInit() {
    this.productsvc.list()
      .subscribe(resp =>{
        console.log(resp);
        this.products = resp;
      })
  }

}
