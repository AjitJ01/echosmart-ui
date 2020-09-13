import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logText: string = "Login";

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.logText = "Log out"
  }
}
