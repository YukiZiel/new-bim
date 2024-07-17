import { Component, Input, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AuthService } from '../../services/auth.service';
import { FilterFService } from '../../services/filterF.service';
import { FilterGService } from '../../services/filterG.service';
import { forkJoin } from 'rxjs';
import { AddFavService } from '../../services/add-fav.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  @Input() objectBim!: ObjectBIM;

  userData: any;
  favoriteObjects: any[] = [];


  constructor(private authService: AuthService, private userService: UserService, private addFavService: AddFavService, private filterGService: FilterGService, private filterFService: FilterFService) { }


  ngOnInit(): void {
    //Obtiene los datos del usuario actualmente autenticado y se almacena en la variable 'userData'
    this.userData = this.authService.getUserData();

    // Llamar al servicio para obtener los favoritos del usuario
    this.userService.getFavoriteObjects(this.userData.id_user)
      .subscribe((favorites: any[]) => {
        const objectIds = favorites.map(fav => fav.objectid); // Extraer los objectid

        // Usar forkJoin para manejar múltiples llamadas asíncronas
        // Llama al método getDetail del servicio filterGService para cada objectid, obteniendo los detalles de los objetos BIM Ganéricos
        forkJoin(objectIds.map(id => this.filterGService.getDetail(id)))
          .subscribe(responseG => {

            forkJoin(objectIds.map(id => this.filterFService.getDetail(id))) // Obtiene los detalles de los objetos BIM Fabricantes
              .subscribe(responseF => {
                // Los resultados de ambas llamadas (responseG y responseF) se filtran para eliminar elementos undefined.
                // Una vez filtrados se combinan en un solo array (allBim).
                // El array combinado se asigna a la variable favoriteObjects, que almacena todos los objetos BIM favoritos del usuario.
                var allBim: any = responseG.filter(item => item !== undefined);
                allBim.push(...responseF.filter(item => item !== undefined)); // ... es un operador de propagación que permite expandir un array en otro array.
                this.favoriteObjects = allBim;
              });
          });
      });
  }

  //llama al servicio AddFavService para eliminar un objeto de favoritos y actualiza la lista de favoritos en el frontend.
  toggleFavList(objectId: string): void { 
    this.addFavService.toggleFavorite(this.userData.id_user, objectId).subscribe(response => {
      if (response.success) {
        this.favoriteObjects = this.favoriteObjects.filter(obj => obj.id !== objectId);
      }
    });
  }
}
