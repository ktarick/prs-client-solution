import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];
  searchCriteria: string = ""
  user: User;

  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService 
  ) { }

  ngOnInit() {
    console.log("Logged in user is: ", this.syssvc.loggedInUser);
    this.user = this.syssvc.loggedInUser;

    this.requestsvc.list()
      .subscribe(resp =>{
        console.log(resp);
        this.requests = resp;
      })
  }

}
