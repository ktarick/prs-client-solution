import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;
  verify: boolean;
  user: User;
  
  constructor(private requestscvr: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
    ) { }

  ngOnInit() {
    console.log("Logged in user is: ", this.syssvc.loggedInUser);
    this.user = this.syssvc.loggedInUser;

    let id = this.route.snapshot.params.id;

    this.requestscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.request = respond;
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
    this.requestscvr.change(this.request)
    .subscribe(
      resp => { //success
        console.log(resp);
        this.router.navigateByUrl(`/request/edit/${this.request.id}`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  statusChange():void{
    this.requestscvr.reviewStatus(this.request)
    .subscribe(
      resp => { //success
        console.log(resp);
        this.router.navigateByUrl(`/request/list`);
      },
      err =>{ //error
        console.error(err);
      });
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
}