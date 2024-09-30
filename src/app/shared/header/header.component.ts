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

  menuItems = [
    { label: 'Adecuación  del terreno y sustentación del edificio', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistema  estructural', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas  de envolvente y de acabados exteriores', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas  de compartimentación y de acabados interiores', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas  de acondicionamiento, instalaciones y servicios', icon: 'assets/images/Frame 2.png' },
    { label: 'Equipamientos   y mobiliario', icon: 'assets/images/Frame 3.png' },
    { label: 'Urbanización  de los espacios exteriores', icon: 'assets/images/Frame 3.png' },
    { label: 'Construcciones  e instalaciones temporales', icon: 'assets/images/Frame 3.png' },
    { label: 'Todas las categorías', icon: 'assets/images/Frame 3.png' },
  ]
}
