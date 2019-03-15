import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');

  save(): void{
    this.usersvc.create(this.user)
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
