import { Component, OnInit } from '@angular/core';
import { FilterGService } from '../../services/filterG.service';
import { ActivatedRoute } from '@angular/router';
import { FilterFService } from '../../services/filterF.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AddFavService } from '../../services/add-fav.service';


@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrl: './object-detail.component.css'
})


export class ObjectDetailComponent implements OnInit {

  detail: any = {};
  errorMessage: any;
  expandedGroups: { [key: string]: boolean } = {}; // Mantiene el estado de expansión de las propiedades
  isDisabled = false;
  userData: any;
  // Alterna el estado de expansión de las propiedades
  toggleGroup(propgroup: string): void {
    this.expandedGroups[propgroup] = !this.expandedGroups[propgroup];
  }
  // Verifica si las propiedades está desplegado o no
  isGroupExpanded(propgroup: string): boolean {
    return !!this.expandedGroups[propgroup];
  }

  isLink(value: string): boolean {
    return value.startsWith('http');
  }

  constructor(private route: ActivatedRoute, private filterGService: FilterGService, private filterFService: FilterFService, private authService: AuthService, private location: Location, private addFavService: AddFavService) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { // Obtiene el parámetro de consulta que se pasó durante la navegación
      const fromRoute = params['from'];
      this.route.params.subscribe(data => {
        const id = data['id'];
        if (fromRoute.includes('fabricantes')) { // Verifica el parámetro con from
          this.filterFService.getDetail(id).subscribe(response => {
            this.detail = response;   // Obtengo los detalles del objeto BIM de Fabricantes basándome en el id
          });
        } else if (fromRoute.includes('genericos')) {
          this.filterGService.getDetail(id).subscribe(response => {
            this.detail = response;   // Obtengo los detalles del objeto BIM de Ganéricos basándome en el id
          });
        }
      });

    });
    // Comprueba si hay datos de usuario, es decir si hay sesión iniciada, si no la hay entonces los iconos de favoritos estarán desactivados
    this.userData = this.authService.getUserData();
    this.isDisabled = this.userData === null;
  }
  // Método para añadir o eliminar los objetos BIM de favoritos
  // toggleFavList(objectBim: ObjectBIM) {
  //   const userid = this.userData?.id_user; // Obtener el userid del usuario en sesión
  //   const objectid = objectBim.id; // Obtiene el id del objeto BIM clicado
  //   // Hace la comprobación en la base de datos, si exite la fila entonces la borra, si no, la añade
  //   this.addFavService.toggleFavorite(userid, objectid).subscribe(
  //     response => {
  //       console.log(response);
  //     },
  //     error => {
  //       console.error('Error al agregar favorito:', error);
  //     }
  //   );
  // }
  // Comprueba si el usuario ha iniciado sesión
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  showErrorMessage() {
    this.errorMessage = 'Inicia sesión para descargar';

  }

  goBack(): void {
    this.location.back(); //utiliza el método back() del servicio Location para navegar a la página anterior en el historial del navegador
  }
}