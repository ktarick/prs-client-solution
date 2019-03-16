import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');

  save(): void{
    this.usersvc.change(this.user)
      .subscribe(
        resp =>{ //sucess
          console.log(resp)
          this.router.navigateByUrl('/user/list')
        },
        err => { //error
          console.log(err)
        }
      );
    }
  constructor(private usersvc: UserService, private router: Router) { }

  ngOnInit() {
  }

}
