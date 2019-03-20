import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  verify: boolean;

  constructor(private vendorscvr: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.vendorscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.vendor = respond;
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
    this.vendorscvr.change(this.vendor)
    .subscribe(
      resp => { //success
        console.log(resp);
        this.router.navigateByUrl(`/vendors/edit/${this.vendor.id}`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  delete():void{
    this.vendorscvr.remove(this.vendor)
    .subscribe(
      resp => { //sucess
      console.log("Vendor Delete Successful" ,resp);
      this.router.navigateByUrl('vendors/list')
    },
    err =>{
      console.error("Vendor Delete Failed!")
    }
    );
  }
}