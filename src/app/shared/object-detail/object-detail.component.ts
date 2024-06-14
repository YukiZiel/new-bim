import { Component, Input, OnInit } from '@angular/core';
import { FilterGService } from '../../services/filterG.service';
import { ActivatedRoute } from '@angular/router';
import { FilterFService } from '../../services/filterF.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrl: './object-detail.component.css'
})


export class ObjectDetailComponent implements OnInit {

  detail: any = {};

  errorMessage: any;

  expandedGroups: { [key: string]: boolean } = {};

  toggleGroup(propgroup: string): void {
    this.expandedGroups[propgroup] = !this.expandedGroups[propgroup];
  }

  isGroupExpanded(propgroup: string): boolean {
    return !!this.expandedGroups[propgroup];
  }

  constructor(private route: ActivatedRoute, private filterGService: FilterGService, private filterFService: FilterFService, private authService: AuthService, private location: Location) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { //obtener el parámetro de consulta que se pasó durante la navegación
      const fromRoute = params['from'];
      this.route.params.subscribe(data => {
        const id = data['id'];
        if (fromRoute.includes('fabricantes')) { //Verificar el parámetro con from
          this.filterFService.getDetail(id).subscribe(response => {
            this.detail = response;   //obtengo los detalles del objeto BIM basándome en el id
          });
        } else if (fromRoute.includes('inicio')) {
          this.filterGService.getDetail(id).subscribe(response => {
            this.detail = response;
          });
        }
      });

    });
  }

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

