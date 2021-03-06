import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users: User[];
  user: User;

  save():void{
    this.request.userId = this.user.id
    this.requestscvr.create(this.request)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/request/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  constructor(
    private requestscvr: RequestService,
    private router: Router,
    private userscvr: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    console.log("Logged in user is: ", this.syssvc.loggedInUser);
    this.user = this.syssvc.loggedInUser;

    this.userscvr.list()
      .subscribe (resp =>{
        this.users = resp;
      })
  }

}
