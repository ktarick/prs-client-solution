import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  verify: boolean;
  vendors: Vendor[];

  edit():void{
    this.productscvr.change(this.product)
    .subscribe(
      resp => { //success
        console.log("Product Update Successful", resp);
        this.router.navigateByUrl(`/product/list`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  delete():void{
    this.productscvr.remove(this.product)
    .subscribe(
      resp => { //sucess
      console.log("Product Delete Successful" ,resp);
      this.router.navigateByUrl('product/list')
    },
    err =>{
      console.error("Product Delete Failed!")
    }
    );
  }

  constructor(
    private productscvr: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService,
    private vendorscvr: VendorService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.vendorscvr.list()
      .subscribe (resp =>{
        this.vendors = resp;
      })

    this.productscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.product = respond;
        },
        err => {
          console.error(err);
        });
        let verify = false;
      }
      
      setVerifyT():void{
        this.verify = true;
      }
      setVerifyF():void{
        this.verify = false;
  }
}