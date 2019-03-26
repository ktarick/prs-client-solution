import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request.class';
import { SystemService } from '../../system/system.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';
import { User } from '../../user/user.class'

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestLine-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  requests: Request[];
  request: Request;
  requestline: Requestline;
  searchCriteria: string = "";
  user: User;

  refresh():void{
    console.log("refresh()");
    this.requestsvc.get(this.request.id.toString())
      .subscribe(
        resp => {
          this.request = resp; 
          console.log("after refresh()");
        });
      }

  delete(requestline: Requestline):void{
    this.requestlinesvc.remove(requestline)
    .subscribe(
      resp => { //sucess
      console.log("Requestline Delete Successful" ,resp);
      this.refresh();
    },
    err =>{
      console.error("Requestline Delete Failed!")
    });
  }

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService 
  ) { }

  ngOnInit() {
    console.log("Logged in user is: ", this.syssvc.loggedInUser);
    this.user = this.syssvc.loggedInUser;

    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id)
      .subscribe(resp =>{
        console.log(resp);
        this.request = resp;
      })
  }
}