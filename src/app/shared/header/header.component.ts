import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }
  // Comprueba si el usuario ha iniciado sesión
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  // Método para cerrar sesión
  logout(): void {
    this.authService.logout();
    console.log('Se ha cerrado la sesión');

  }

}
