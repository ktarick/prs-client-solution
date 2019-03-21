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
  searchCriteria: string = "";
  sortCriteria: string = "code"
  sortOrder: string = "asc";

  sortBy(column: string): void { 
    if(this.sortCriteria === column){
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc"}
    else{
      this.sortCriteria = column;
      this.sortOrder = "asc";
    }
  }

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