import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { SystemService } from '../../system/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();
  requestId: number;
  products: Product[];


  save():void{
    this.requestline.requestId = this.requestId;
      console.log(this.requestline)
    this.requestlinesvc.create(this.requestline)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('request/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  constructor(
    private requestlinesvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.requestId = this.route.snapshot.params.id;
    
    this.productsvc.list()
      .subscribe (resp =>{
        this.products = resp;
      })
  }

}
