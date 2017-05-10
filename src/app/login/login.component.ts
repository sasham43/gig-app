import { Component, OnInit, Input } from '@angular/core';

import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_button = true;
  show_input = false;
  active_user: User;
  @Input() username: string;
  @Input() password: string;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  showLogin(){
    this.show_button = false;
    this.show_input = true;
  }

  loginUser(): void {
    this.active_user = this.loginService.loginUser(this.username, this.password);
    console.log('active_user:', this.active_user);
  }

}
