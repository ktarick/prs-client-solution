import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  verify: boolean;

  constructor(private productscvr: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.productscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.product = respond;
        });

    let verify = false;    
  }
  
  setVerifyT():void{
    this.verify = true;
  }
  setVerifyF():void{
    this.verify = false;
  }

  edit():void{
    this.productscvr.change(this.product)
    .subscribe(
      resp => { //success
        console.log(resp);
        this.router.navigateByUrl(`/product/edit/${this.product.id}`);
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
}