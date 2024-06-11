import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;

  // constructor(private loginService: LoginService) { }

  ngOnInit() {}
  //   this.loginService.currentUser.subscribe(user => {
  //     this.isLoggedIn = !!user;
  //   });
  // }

  // logout() {
  //   this.loginService.logout();
  // }
}
