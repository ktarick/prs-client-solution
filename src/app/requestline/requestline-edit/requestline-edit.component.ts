import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: Requestline = new Requestline();
  users: User[];

  update():void{
    this.requestlinescvr.change(this.requestline)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/requestline/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  constructor(
    private requestlinescvr: RequestlineService,
    private router: Router,
    private userscvr: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.userscvr.list()
      .subscribe (resp =>{
        this.users = resp;
      })
  }

}
