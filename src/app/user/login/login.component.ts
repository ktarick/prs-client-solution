import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  username: string = '';
  password: string = '';
  message: string = '';

  login(): void {
    this.usersvc.login(this.username, this.password)
      .subscribe(
        resp => {
          console.log("Login Successful", resp);
          // let user = resp;
          this.syssvc.loggedInUser = resp;
          this.router.navigateByUrl("/home")
        },
        err => {
          console.error("Login Failed!", err)
          this.message = "  Invalid Username/Password.";
        }
      )
  }

  constructor(
    private usersvc: UserService,
    private router: Router,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.syssvc.loggedInUser = null; // user not logged in
  }
}