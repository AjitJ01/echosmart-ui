import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isModalOpen: boolean = false;
  modalTitle: string;
  typeOfModal: string;
  logInStatus: string = 'Login';

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.modalTitle = "Login";
    this.typeOfModal = "loginForm";
    this.isModalOpen = true;
    this.logInStatus = 'Log out'
  }

}
