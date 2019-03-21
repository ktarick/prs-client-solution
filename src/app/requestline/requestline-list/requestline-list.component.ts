import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request.class';
import { SystemService } from '../../system/system.service';
import{Router, ActivatedRoute} from '@angular/router';
import { Requestline } from '../requestline.class';

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
  
  get():void{
    this.requestsvc.change(this.request)
    .subscribe(
      resp => { //success
        this.router.navigateByUrl(`/request/list/{{ request.id }}`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  delete():void{
    this.requestsvc.remove(this.request)
    .subscribe(
      resp => { //sucess
      console.log("User Delete Successful" ,resp);
      this.router.navigateByUrl('request/list')
    },
    err =>{
      console.error("User Delete Failed!")
    }
    );
  }

  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService 
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id)
      .subscribe(resp =>{
        console.log(resp);
        this.request = resp;
      })
  }
}