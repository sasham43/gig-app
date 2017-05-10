import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_button = true;
  show_input = false;

  constructor() { }

  ngOnInit() {
  }

  showLogin(){
    this.show_button = false;
    this.show_input = true;
  }

}
