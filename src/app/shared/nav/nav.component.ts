import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ObjectBIM } from '../../object-bim';
import { BimService } from '../../services/bim.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  formatoOptions: {value: string, disabled: boolean}[] = [
    {value:'ArchiCAD', disabled:false}, 
    {value:'FIEBDC - BC3', disabled:false}, 
    {value:'IFC', disabled:false}, 
    {value:'Revit', disabled:false}
  ];

  sistemaOptions: {value: string}[] = [
    {value:'Equipamiento y mobiliario'},
    {value:'Infraestructura'},
    {value:'Instalaciones'},
    {value:'Sistema estructural y envolventes'},
    {value:'Sistemas de compartimentación'},
    {value:'Terreno y entorno'}
  ];

  subsistemaOptions: {value: string, disabled: boolean}[] = [
    {value:'Calefacción, Ventilación y Aire Acondicionado', disabled:false},
    {value:'Cerramientos exteriores horizontales', disabled:false},
    {value:'Cerramientos exteriores verticales', disabled:false},
    {value:'Cerramientos interiores', disabled:false},
    {value:'Cimentación', disabled:false},
    {value:'Electricidad', disabled:false},
    {value:'Equipos', disabled:false},
    {value:'Estructura', disabled:false},
    {value:'Forjados sanitarios y soleras', disabled:false},
    {value:'Lampistería', disabled:false},
    {value:'Mejoras del terreno y entorno', disabled:false},
    {value:'Mobiliario', disabled:false},
    {value:'Protección contra incendios', disabled:false},
    {value:'Revestimientos y acabados interiores', disabled:false},
    {value:'Saneamiento de agua y gas', disabled:false},
    {value:'Telecomunicaciones', disabled:false}
  ]



  bims: ObjectBIM[] = [];

  constructor(private bimService:BimService) {}

  ngOnInit() {
    this.bimService.getBims().subscribe(data => {
      this.bims = data.bims;
    })
  }


  // disableOptions(selectedValue: string) {
  //   debugger;
  //   if (selectedValue === 'Equipamiento y mobiliario') {
  //     this.subsistemaOptions[7].disabled = false;
  //     this.subsistemaOptions[12].disabled = false;
  //   } else if (selectedValue === 'Infraestructura') {
  //     this.subsistemaOptions[4].disabled = false;
  //     this.subsistemaOptions[9].disabled = false;
  //     this.subsistemaOptions[15].disabled = false;
  //   } else {
  //     this.subsistemaOptions.forEach(option => option.disabled = true);
  //   }
  // };

  // objectBimList: ObjectBIM[] = [
  //   {
  //     id: 3567,
  //     idemp: "1639958",
  //     image: "Flor_300x300.jpg",
  //     description: "ITeC - Acera 8 cm - Loseta mortero Flor",
  //     llicencia: "No",
  //     dataEmissio: "31/01/2020",
  //     ecob: true,
  //   },   {
  //     id: 3567,
  //     idemp: "1639958",
  //     image: "Flor_300x300.jpg",
  //     description: "ITeC - Acera 8 cm - Loseta mortero Flor",
  //     llicencia: "No",
  //     dataEmissio: "31/01/2020",
  //     ecob: true,
  //   },
  //   {
  //     id: 3567,
  //     idemp: "1639958",
  //     image: "Flor_300x300.jpg",
  //     description: "ITeC - Acera 8 cm - Loseta mortero Flor",
  //     llicencia: "No",
  //     dataEmissio: "31/01/2020",
  //     ecob: true,
  //   },   {
  //     id: 3567,
  //     idemp: "1639958",
  //     image: "Flor_300x300.jpg",
  //     description: "ITeC - Acera 8 cm - Loseta mortero Flor",
  //     llicencia: "No",
  //     dataEmissio: "31/01/2020",
  //     ecob: true,
  //   },
  //   {
  //     id: 3567,
  //     idemp: "1639958",
  //     image: "Flor_300x300.jpg",
  //     description: "ITeC - Acera 8 cm - Loseta mortero Flor",
  //     llicencia: "No",
  //     dataEmissio: "31/01/2020",
  //     ecob: true,
  //   },   {
  //     id: 3567,
  //     idemp: "1639958",
  //     image: "Flor_300x300.jpg",
  //     description: "ITeC - Acera 8 cm - Loseta mortero Flor",
  //     llicencia: "No",
  //     dataEmissio: "31/01/2020",
  //     ecob: true,
  //   },
  // ]





  // selectedOption!: string ;

  // disableOption(option: { value: string, disabled: boolean }) {
  //   this.selectedOption = option.value;
  //   this.formatoOptions.forEach((opt) => {
  //     if (opt !== option) {
  //       opt.disabled = opt.value !== option.value;
  //     }
  //   })
  // }
}
