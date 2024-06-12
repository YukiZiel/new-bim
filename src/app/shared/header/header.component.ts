import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.authService.isLoggedIn.subscribe(loggedIn => {
    //   this.isLoggedIn = loggedIn;
    // });
    // Verificar el estado de inicio de sesión al cargar el componente
  //  this.authService.checkLoginStatus();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  logout(): void {
    this.authService.logout();
    console.log('Se ha cerrado la sesión');
  //  this.authService.logout().subscribe(() => {
      // El estado de loggedIn se actualizará automáticamente a través de BehaviorSubject
  //  });
  }
  // constructor(private loginService: LoginService) { }

  //   this.loginService.currentUser.subscribe(user => {
  //     this.isLoggedIn = !!user;
  //   });
  // }

  // logout() {
  //   this.loginService.logout();
  // }
}
