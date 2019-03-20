import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request;
  verify: boolean;
  users: User[];

  edit():void{
    this.requestscvr.change(this.request)
    .subscribe(
      resp => { //success
        console.log("Request Update Successful", resp);
        this.router.navigateByUrl(`/request/list`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  delete():void{
    this.requestscvr.remove(this.request)
    .subscribe(
      resp => { //sucess
      console.log("Request Delete Successful" ,resp);
      this.router.navigateByUrl('request/list')
    },
    err =>{
      console.error("Request Delete Failed!")
    }
    );
  }

  constructor(
    private requestscvr: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService,
    private userscvr: UserService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.userscvr.list()
      .subscribe (resp =>{
        this.users = resp;
      })

    this.requestscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.request = respond;
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