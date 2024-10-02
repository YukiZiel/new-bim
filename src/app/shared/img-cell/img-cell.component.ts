import { Component, Input, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ObjectBIM } from '../../interfaces/object-bim';
import { FilterGService } from '../../services/filterG.service';
import { FilterFService } from '../../services/filterF.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-img-cell',
  templateUrl: './img-cell.component.html',
  styleUrl: './img-cell.component.css'
})
export class ImgCellComponent implements OnInit, ICellRendererAngularComp{
  @Input() objectBim!: ObjectBIM;
  bims: ObjectBIM[] = [];
  value:any;
  agInit(params: ICellRendererParams): void {
    this.objectBim = params.data; 
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false; 
  }
  
  constructor(private route: ActivatedRoute, private filterGService: FilterGService, private filterFService: FilterFService) { }

  onClick(event:any) {
    alert('Falta imagen');
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => { // Obtiene el parámetro de consulta que se pasó durante la navegación
    //   const fromRoute = params['from'];
    //   this.route.params.subscribe(data => {
    //     if (fromRoute.includes('fabricantes')) { // Verifica el parámetro con from
    //       this.filterFService.getBims().subscribe(data => {
    //         this.bims = data.bimsF;   // Obtengo los detalles del objeto BIM de Fabricantes basándome en el id
    //       });
    //     } else if (fromRoute.includes('genericos')) {
    //       this.filterGService.getBims().subscribe(data => {
    //         this.bims = data.bims;
    //       });
    //     }
    //   });
    // })
  }
}
