import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AuthService } from '../../services/auth.service';
import { FilterFService } from '../../services/filterF.service';
import { FilterGService } from '../../services/filterG.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit{
  @Input() objectBim!: ObjectBIM;

  userData: any;
  objectDetail: any = {};
  favoriteObjects:  any[] = []; // Array para almacenar los objectid favoritos


  constructor( private authService: AuthService, private userService:UserService, private router: Router, private filterGService: FilterGService, private filterFService: FilterFService ) {}

  ngOnInit(): void {

    this.userData = this.authService.getUserData();
 debugger;
    // Llamar al servicio para obtener los favoritos del usuario
    this.userService.getFavoriteObjects(this.userData.id_user)
      .subscribe((favorites: any[]) => {

        const objectIds = favorites.map(fav => fav.objectid); // Extraer los objectid
        console.log(objectIds);

        // Usar forkJoin para manejar múltiples llamadas asincrónicas
        forkJoin(objectIds.map(id => this.filterGService.getDetail(id)))
          .subscribe(responseG => {

            forkJoin(objectIds.map(id => this.filterFService.getDetail(id)))
              .subscribe(responseF => {

                var cafe:any = responseG.filter(item => item !== undefined);
                cafe.push(...responseF.filter(item => item !== undefined));
                // var cafe2:any = [responseG.filter(item => item !== undefined), responseF.filter(item => item !== undefined)]
                this.favoriteObjects = cafe;
                console.log(this.favoriteObjects);
              });

            //this.favoriteObjects = responses; // Asignar la lista de objetos BIM completos


          });
      });

        // Obtener los detalles de cada objeto BIM favorito
        // objectIds.forEach(id => {
        //   this.filterFService.getDetail(id).subscribe(response => {
        //     this.favoriteObjects.push(response); // Agregar cada objeto BIM a la lista de favoritos
        //   });
        // });

  }

  navigateToDetail(id:string): void {
    const currentRoute = this.router.url; // Obtener la ruta actual
    this.router.navigate(['/bim', id], { queryParams: { from: currentRoute } }) // Pasar la ruta actual como parámetro de consulta
  }
}
