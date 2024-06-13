import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AddFavService } from '../../services/add-fav.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-object-bim',
  templateUrl: './objects-bim.component.html',
  styleUrl: './objects-bim.component.css'
})
export class ObjectsBimComponent {
  @Input() objectBim!: ObjectBIM;
  
  constructor(private router: Router, private addFavService: AddFavService, private authService: AuthService) {}

  navigateToDetail(id:string): void {
    const currentRoute = this.router.url; // Obtener la ruta actual
    this.router.navigate(['/bim', id], { queryParams: { from: currentRoute } }) // Pasar la ruta actual como parámetro de consulta
  }

  toggleFavList(objectBim:ObjectBIM) {
    const userid = this.authService.getUserData().id_user; // Obtener el userid del usuario en sesión
    const objectid = objectBim.id; // Suponiendo que `id` es el identificador único del objeto BIM

    this.addFavService.addFav(userid, objectid).subscribe(
      response => {
        console.log(response); // Manejar la respuesta si es necesario
      },
      error => {
        console.error('Error al agregar favorito:', error);
      }
    );
  }
}
