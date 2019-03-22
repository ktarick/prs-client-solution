import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  requests: Request[];


  constructor(
    private requestsvc: RequestService,
  ) { }

  ngOnInit() {
    this.requestsvc.listReview()
      .subscribe(resp =>{
        console.log(resp);
        this.requests = resp;
      })
  }
}
