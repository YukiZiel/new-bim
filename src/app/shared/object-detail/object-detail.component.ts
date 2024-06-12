import { Component, Input } from '@angular/core';
import { FilterGService } from '../../services/filterG.service';
import { ActivatedRoute } from '@angular/router';
import { FilterFService } from '../../services/filterF.service';
import { FilterPropService } from '../../services/filter-prop.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrl: './object-detail.component.css'
})


export class ObjectDetailComponent {
  // @Input() prop!: Properties;
  // constructor(private addFavService: AddFavService) {}

  // toggleFavList(objectBim:ObjectBIM) {
  //   if (this.inFavList(objectBim)) {
  //     this.addFavService.removeFromFavList(objectBim);
  //   } else {
  //     this.addFavService.addFav(objectBim);
  //   }
  // }

  // inFavList(objectBim: ObjectBIM) : boolean {
  //   return this.addFavService.inFavList(objectBim);
  // }

  detail: any = '';
  constructor( private route:ActivatedRoute, private filterGService: FilterGService, private filterFService: FilterFService, private authService: AuthService ) {
    this.route.params.subscribe(data => {

      this.filterFService.getDetail( data['id']).subscribe(response => {
        this.detail = response;

      });
      
      this.filterGService.getDetail( data['id']).subscribe(response => {
        this.detail = response;

      });
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  showErrorMessage(): void {
    alert('Por favor, inicia sesión para descargar'); // Muestra un mensaje de error al hacer clic en el enlace
  }
  // toggleFavList(detail:ObjectBIM) {
  //   if (this.inFavList(detail)) {
  //     this.addFavService.removeFromFavList(detail);
  //   } else {
  //     this.addFavService.addFav(detail);
  //   }
  // }

  // inFavList(detail: ObjectBIM) : boolean {
  //   return this.addFavService.inFavList(detail);
  // }

 
    // expandedElement!: PeriodicElement | null;
  }
  
  // export interface PeriodicElement {
  //   name: string;
  //   position: number;
  //   weight: number;
  //   symbol: string;
  //   description: string;
  // }
  
  // const ELEMENT_DATA: PeriodicElement[] = [
  //   {
  //     position: 1,
  //     name: 'Hydrogen',
  //     weight: 1.0079,
  //     symbol: 'H',
  //     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
  //         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  //   },
  //   {
  //     position: 2,
  //     name: 'Helium',
  //     weight: 4.0026,
  //     symbol: 'He',
  //     description: `Helium is a chemical element with symbol He and atomic number 2. It is a
  //         colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
  //         group in the periodic table. Its boiling point is the lowest among all the elements.`,
  //   }
  // ]
  // this.route.params.subscribe(data => {
  //   const id = data['id'];
  //     this.detail = this.filterGService.getDetail(id);
  //     console.log(this.detail);
  //   });

