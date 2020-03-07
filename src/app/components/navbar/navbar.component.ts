import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public islogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.islogin = !this.islogin;
  }

}
