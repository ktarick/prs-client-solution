import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];
  searchCriteria: string = ""

  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService 
  ) { }

  ngOnInit() {
    this.requestsvc.list()
      .subscribe(resp =>{
        console.log(resp);
        this.requests = resp;
      })
  }

}
