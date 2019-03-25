import { Component, OnInit } from '@angular/core';
import { RequestService} from '../../request/request.service';
import { RequestlineService} from '../../requestline/requestline.service';
import { SystemService} from '../../system/system.service';
import { Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Request } from '../../request/request.class';
import { Requestline } from '../../requestLine/requestLine.class';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  request: Request;
  requestline: Requestline;

  constructor(private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute) { }

    approve(){
      this.requestsvc.approved(this.request)
      .subscribe(respond => {
        console.log(respond)
        this.router.navigateByUrl('/request/review/list');
      })
    }
    reject(){
      this.requestsvc.rejected(this.request)
      .subscribe(respond => {
        console.log(respond)
        this.router.navigateByUrl('/request/review/list');
      })
    }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.request = respond;
        });
  }

}