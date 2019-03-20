import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor("", "", "", "", "", "", "", "");
  
  save():void{
    this.vendorscvr.create(this.vendor)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/vendor/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  constructor(
    private vendorscvr: VendorService,
    private router: Router,
    private syssvc: SystemService
    ) { }

  ngOnInit() {
  }
}