import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Filters } from '../../filter';
import { FilterService } from '../../services/filter.service';
// import { ObjectBIM } from '../../object-bim';
// import { BimService } from '../../services/bim.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements OnInit{
  @ViewChild( MatAccordion ) accordion!: MatAccordion;
  @Output() filterChange = new EventEmitter<any>();
  sistemasG: Filters[] = [];
  subsistemasG: Filters[] = [];
  formatos: Filters[] = [];
  ifcBuildingElementsG: Filters[] = [];
  elementosBimItecG: Filters[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.getSistemas().subscribe(data => {
      this.sistemasG = data.sistemasG;
    });

    this.filterService.getSubsistemas().subscribe(data => {
      this.subsistemasG = data.subsistemasG;
    });

    this.filterService.getFormatos().subscribe(data => {
      this.formatos = data.formatos;
    });

    this.filterService.getIfcBuildingElements().subscribe(data => {
      this.ifcBuildingElementsG = data.ifcBuildingElementsG;
    });

    this.filterService.getElementosBimITeCG().subscribe(data => {
      this.elementosBimItecG = data.elementosBimItecG;
    });
  }

  onFilterChange(filterType: string, filterValue: any) {
    this.filterChange.emit({ type: filterType, value: filterValue });
  }
}

// export class NavComponent {
//   @ViewChild(MatAccordion) accordion!: MatAccordion;

//   selectedSistemaG = "";
//   sistemasG: Filters[] = [];


//   constructor(private filterService:FilterService) {}

//   public filterSitemas() {
//     this.filterService.getSistemas().subscribe(data => {
//       this.sistemasG = data.sistemasG;
//     });
//   }
  
  // formatoOptions: {value: string, disabled: boolean}[] = [
  //   {value:'ArchiCAD', disabled:false}, 
  //   {value:'FIEBDC - BC3', disabled:false}, 
  //   {value:'IFC', disabled:false}, 
  //   {value:'Revit', disabled:false}
  // ];

  // sistemaOptions: {value: string}[] = [
  //   {value:'Equipamiento y mobiliario'},
  //   {value:'Infraestructura'},
  //   {value:'Instalaciones'},
  //   {value:'Sistema estructural y envolventes'},
  //   {value:'Sistemas de compartimentación'},
  //   {value:'Terreno y entorno'}
  // ];

  // subsistemaOptions: {value: string, disabled: boolean}[] = [
  //   {value:'Calefacción, Ventilación y Aire Acondicionado', disabled:false},
  //   {value:'Cerramientos exteriores horizontales', disabled:false},
  //   {value:'Cerramientos exteriores verticales', disabled:false},
  //   {value:'Cerramientos interiores', disabled:false},
  //   {value:'Cimentación', disabled:false},
  //   {value:'Electricidad', disabled:false},
  //   {value:'Equipos', disabled:false},
  //   {value:'Estructura', disabled:false},
  //   {value:'Forjados sanitarios y soleras', disabled:false},
  //   {value:'Lampistería', disabled:false},
  //   {value:'Mejoras del terreno y entorno', disabled:false},
  //   {value:'Mobiliario', disabled:false},
  //   {value:'Protección contra incendios', disabled:false},
  //   {value:'Revestimientos y acabados interiores', disabled:false},
  //   {value:'Saneamiento de agua y gas', disabled:false},
  //   {value:'Seguridad', disabled:false},
  //   {value:'Telecomunicaciones', disabled:false}
  // ]

  

  // bims: ObjectBIM[] = [];

  // constructor(private bimService:BimService) {}

  // ngOnInit() {
  //   this.bimService.getBims().subscribe(data => {
  //     this.bims = data.bims;
  //   })
  // }


  // disableOptions(sistemaOptions:{} ) {
  //   this.subsistemaOptions.forEach(option => option.disabled = true);
  //   switch (sistemaOptions) {
  //     case 'Equipamiento y mobiliario':
  //       this.subsistemaOptions[6].disabled = false;
  //       this.subsistemaOptions[11].disabled = false;

  //       break;
  //     case 'Infraestructura':
  //       this.subsistemaOptions[4].disabled = false;
  //       this.subsistemaOptions[8].disabled = false;
  //       this.subsistemaOptions[14].disabled = false;
  //       break;
  //     case 'Instalaciones':
  //       this.subsistemaOptions[0].disabled = false;
  //       this.subsistemaOptions[5].disabled = false;
  //       this.subsistemaOptions[9].disabled = false;
  //       this.subsistemaOptions[12].disabled = false;
  //       this.subsistemaOptions[15].disabled = false;
  //       break;
  //     case 'Sistema estructural y envolventes':
  //       this.subsistemaOptions[1].disabled = false;
  //       this.subsistemaOptions[2].disabled = false;
  //       this.subsistemaOptions[7].disabled = false;
  //       break;
  //     case 'Sistemas de compartimentación':
  //       this.subsistemaOptions[3].disabled = false;
  //       this.subsistemaOptions[13].disabled = false;
  //       break;
  //     case 'Terreno y entorno':
  //       this.subsistemaOptions[10].disabled = false;
  //       break;
  //   }
  // };

// }
