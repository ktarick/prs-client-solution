import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  verify: boolean;

  constructor(private userscvr: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.userscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.user = respond;
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
    this.userscvr.change(this.user)
    .subscribe(
      resp => { //success
        console.log(resp);
        this.router.navigateByUrl(`/user/edit/${this.user.id}`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  delete():void{
    this.userscvr.remove(this.user)
    .subscribe(
      resp => { //sucess
      console.log("User Delete Successful" ,resp);
      this.router.navigateByUrl('user/list')
    },
    err =>{
      console.error("User Delete Failed!")
    }
    );
  }
}

// HTML
  // 1. add vbutton to html
  // 2. add *ngIf to vbutton property called "verify"
  // 3. change delete button to call setVerify()
  // .TS
  // 1. create setVerify to change verify prop to true
  // 2. create verify prop set to false by default