import { Component, OnInit } from '@angular/core';
import {VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class';
import{Router, ActivatedRoute} from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor;
  verify: boolean;

  edit():void{
    this.vendorscvr.change(this.vendor)
    .subscribe(
      resp => { //success
        console.log("Vendor Update Successful", resp);
        this.router.navigateByUrl(`/vendor/list`);
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
      this.router.navigateByUrl('vendor/list')
    },
    err =>{
      console.error("Vendor Delete Failed!")
    }
    );
  }

  constructor(
    private vendorscvr: VendorService,
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