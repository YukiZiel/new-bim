import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  favoriteObjects: any[] = []; // Array para almacenar los objectid favoritos


  constructor(private authService: AuthService, private userService: UserService, private addFavService: AddFavService, private filterGService: FilterGService, private filterFService: FilterFService) { }


  ngOnInit(): void {

    this.userData = this.authService.getUserData();

    // Llamar al servicio para obtener los favoritos del usuario
    this.userService.getFavoriteObjects(this.userData.id_user)
      .subscribe((favorites: any[]) => {
        const objectIds = favorites.map(fav => fav.objectid); // Extraer los objectid
        // console.log(objectIds);

        // Usar forkJoin para manejar múltiples llamadas asincrónicas
        forkJoin(objectIds.map(id => this.filterGService.getDetail(id)))
          .subscribe(responseG => {

            forkJoin(objectIds.map(id => this.filterFService.getDetail(id)))
              .subscribe(responseF => {

                var allBim: any = responseG.filter(item => item !== undefined);
                allBim.push(...responseF.filter(item => item !== undefined));
                this.favoriteObjects = allBim;
              });
          });
      });
  }

  toggleFavList(objectId: string): void { //llama al servicio AddFavService para eliminar un objeto de favoritos y actualiza la lista de favoritos en el frontend.
    this.addFavService.toggleFavorite(this.userData.id_user, objectId).subscribe(response => {
      if (response.success) {
        this.favoriteObjects = this.favoriteObjects.filter(obj => obj.id !== objectId);
      }
    });
  }
}
