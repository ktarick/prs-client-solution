import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { SystemService } from '../../system/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  request: Request;
  requests: Request[]; 
  requestlines: Requestline = new Requestline();
  requestline: Requestline;
  products: Product[];
  verify: boolean;
  
  update():void{
    this.requestlinesvc.change(this.requestline)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl(`/requestline/list/${this.requestline.requestId}`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }
  
  delete():void{
    this.requestlinesvc.remove(this.requestline)
    .subscribe(
      resp => { //sucess
      console.log("User Delete Successful" ,resp);
      this.router.navigateByUrl('user/list')
    },
    err =>{
      console.error("User Delete Failed!")
    }
    );
  }
  
  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    // = this.requestline.id
    this.productsvc.list()
      .subscribe (resp =>{
        this.products = resp;
      });

    // this.requestsvc.list()
    //   .subscribe (resp =>{
    //     this.requests = resp;
    //   })  
      
    this.requestlinesvc.get(id)
      .subscribe(respond => {
        console.log(respond);
      this.requestline = respond;
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
