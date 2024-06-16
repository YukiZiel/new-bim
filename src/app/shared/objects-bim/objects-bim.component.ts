import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AddFavService } from '../../services/add-fav.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-object-bim',
  templateUrl: './objects-bim.component.html',
  styleUrl: './objects-bim.component.css'
})
export class ObjectsBimComponent implements OnInit {
  @Input() objectBim!: ObjectBIM;
  isDisabled = false;
  userData: any;

  constructor(private router: Router, private addFavService: AddFavService, private authService: AuthService) { }

  ngOnInit(): void {
    // Comprueba si hay datos de usuario, es decir si hay sesión iniciada, si no la hay entonces los iconos de favoritos estarán desactivados
    this.userData = this.authService.getUserData();
    this.isDisabled = this.userData === null;
  }

  // Al clicar te redirige a la página en detalle del objeto BIM clicado
  navigateToDetail(id: string): void {
    const currentRoute = this.router.url; // Obtener la ruta actual
    this.router.navigate(['/bim', id], { queryParams: { from: currentRoute } }) // Pasar la ruta actual como parámetro de consulta
  }

  // Método para añadir o eliminar los objetos BIM de favoritos
  toggleFavList(objectBim: ObjectBIM) {
    const userid = this.userData?.id_user; // Obtener el userid del usuario en sesión
    const objectid = objectBim.id; // Obtiene el id del objeto BIM clicado
    // Hace la comprobación en la base de datos, si exite la fila entonces la borra, si no, la añade
    this.addFavService.toggleFavorite(userid, objectid).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error('Error al agregar favorito:', error);
      }
    );
  }
}
