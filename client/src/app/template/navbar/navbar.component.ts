import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/security/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService) {  }

  isLogged: Boolean = false;

  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.loginService.getUserInfo().subscribe(data =>{
      this.isLogged = data.isLogged;
    });
  }

}
