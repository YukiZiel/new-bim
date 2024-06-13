import { Component, Input, OnInit } from '@angular/core';
import { FilterGService } from '../../services/filterG.service';
import { ActivatedRoute } from '@angular/router';
import { FilterFService } from '../../services/filterF.service';
import { AuthService } from '../../services/auth.service';
import { FilterIdService } from '../../services/filterId.service';


@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrl: './object-detail.component.css'
})


export class ObjectDetailComponent implements OnInit {

  detail: any = {};
  // prop: any = '';
  errorMessage: any; 


  // columnsToDisplay: string[] = ['tabla', 'expand'];
  // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  // expandedElement: any | null;

  // toggleExpand(element: any) {
  //   this.expandedElement = this.expandedElement === element ? null : element;
  // }

  expandedGroups: { [key: string]: boolean } = {};

  toggleGroup(propgroup: string): void {
    this.expandedGroups[propgroup] = !this.expandedGroups[propgroup];
  }

  isGroupExpanded(propgroup: string): boolean {
    return !!this.expandedGroups[propgroup];
  }

  constructor( private route:ActivatedRoute, private filterGService: FilterGService, private filterFService: FilterFService, private authService: AuthService ) {

  }
      
      ngOnInit(): void {
        this.route.queryParams.subscribe(params => { //obtener el parámetro de consulta que se pasó durante la navegación
          const fromRoute = params['from'];
          this.route.params.subscribe(data => {
            const id = data['id']; 
            if (fromRoute.includes('fabricantes')) { //Verificar el parámetro con from
              this.filterFService.getDetail(id).subscribe(response => {
                this.detail = response;
            });
            } else if ( fromRoute.includes('inicio')) {
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

  }
  
