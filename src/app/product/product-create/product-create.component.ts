import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product("", "")
  vendor: Vendor;

  save():void{
    this.productscvr.create(this.product)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/product/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  constructor(
    private productscvr: ProductService,
    private router: Router,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
  }

}
