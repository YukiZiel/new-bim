import { Component, Input } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AddFavService } from '../../services/add-fav.service';
import { FilterGService } from '../../services/filterG.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrl: './object-detail.component.css'
})
export class ObjectDetailComponent {
  @Input() objectBim!: ObjectBIM;
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
  constructor( private route:ActivatedRoute, private filterGService: FilterGService )
  {
      route.params.subscribe(data => {
        filterGService.getDetail( data['id'])
        .subscribe(response => {
          this.detail = response;
          console.log(this.detail);
        });
      });
  }

    dataSource = ELEMENT_DATA;

 
    expandedElement!: PeriodicElement | null;
  }
  
  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    },
    {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      description: `Helium is a chemical element with symbol He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`,
    }
  ]
  // this.route.params.subscribe(data => {
  //   const id = data['id'];
  //     this.detail = this.filterGService.getDetail(id);
  //     console.log(this.detail);
  //   });

