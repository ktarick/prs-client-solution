import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];
  // searchCriteria: string = "";

  constructor(
    private vendorsvc: VendorService, 
    private syssvc: SystemService
    ) { }

  ngOnInit() {
    this.vendorsvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.vendors = resp;
      });
  }
}