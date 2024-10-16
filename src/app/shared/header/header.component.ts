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

  menuItemsG = [
    { label: 'Adecuación  del terreno y sustentación del edificio', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistema estructural', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas de envolvente y de acabados exteriores', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas de compartimentación y de acabados interiores', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas de acondicionamiento, instalaciones y servicios', icon: 'assets/images/Frame 2.png' },
    { label: 'Equipamientos y mobiliario', icon: 'assets/images/Frame 3.png' },
    { label: 'Urbanización de los espacios exteriores', icon: 'assets/images/Frame 3.png' },
    { label: 'Construcciones e instalaciones temporales', icon: 'assets/images/Frame 3.png' },
  ]

  menuItemsF = [
    { label: 'Sistema estructural', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas de envolvente y de acabados exteriores', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas de compartimentación y de acabados interiores', icon: 'assets/images/Frame 2.png' },
    { label: 'Sistemas de acondicionamiento, instalaciones y servicios', icon: 'assets/images/Frame 2.png' },
  ]


  levels1 = [
    {
      name: 'Sistema estructural',
      url: 'https://example.com/filtro1', // URL del nivel 1
      sublevels: [
        {
          name: 'Estructura',
          url: '/grid-fabricants', // URL del nivel 2
          sublevels: [
            { name: 'Estructura horizontal', url: '/grid-fabricants' } // URL del nivel 3
          ]
        }
      ]
    },
    {
      name: 'Sistemas de envolvente y de acabados exteriores',
      url: '/grid-fabricants',
      sublevels: [
        {
          name: 'Envolvente vertical',
          url: '/grid-fabricants',
          sublevels: [
            { name: 'Fachadas' }
          ]
        },
        {
          name: 'Envolvente horizontal superior',
          url: '/grid-fabricants',
          sublevels: [
            { name: 'Cubiertas' }
          ]
        }
      ]
    },
    {
      name: 'Sistemas de compartimentación y de acabados interiores',
      url: '/grid-fabricants',
      sublevels: [
        {
          name: 'Compartimentación y acabados interiores verticales',
          url: '/grid-fabricants',
          sublevels: [
            { name: 'Compartimentación interior vertical' }
          ]
        }
      ]
    },
    {
      name: 'Sistemas de acondicionamiento, instalaciones y servicios',
      url: '/grid-fabricants',
      sublevels: [
        {
          name: 'Instalaciones térmicas y de ventilación',
          url: '/grid-fabricants',
          sublevels: [
            { name: 'Terminales y difusores' },
            { name: 'Dispositivos de maniobra y control' }
          ]
        },
        {
          name: 'Instalaciones eléctricas',
          url: '/grid-fabricants',
          sublevels: [
            { name: 'Iluminación' }
          ]
        }
      ]
    }
  ];
  
    // Variables para mantener el estado activo
    activeLevel1: any = null;
    activeLevel2: any = null;
  
    // Función para cuando se hace hover en el primer nivel
    onHoverLevel1(level1: any) {
      this.activeLevel1 = level1;
      this.activeLevel2 = null;  // Reinicia el nivel 2 cuando cambies de nivel 1
    }
  
    // Función para cuando se hace hover en el segundo nivel
    onHoverLevel2(level2: any) {
      this.activeLevel2 = level2;
    }

}
