import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ObjectBIM } from '../../object-bim';
import { FilterGService } from '../../services/filterG.service';
import { Filters } from '../../filter';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-dashboardG',
  templateUrl: './dashboardG.component.html',
  styleUrl: './dashboardG.component.css'
})
export class DashboardGComponent implements OnInit{
  @ViewChild( MatAccordion ) accordion!: MatAccordion;
  @Output() filterChange = new EventEmitter<any>();
  ecobs:  Filters[] = [];
  formatos: Filters[] = [];
  sistemasG: Filters[] = [];
  subsistemasG: Filters[] = [];
  ifcBuildingElementsG: Filters[] = [];
  elementosBimItecG: Filters[] = [];
  searchTerm = "";
  selectedEcob = "";
  selectedFormato = "";
  selectedSistema = "";
  selectedSubsistema = "";
  selectedIfcBuildingElement = "";
  selectedElementosBimItec ="";
  bims: ObjectBIM[] = [];
  // filteredBims: ObjectBIM[] = [];
  constructor(private filterService: FilterGService
  ) {}

  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bims = data.bims;
      // this.filteredBims = this.bims.slice();
      this.sortbimsAsc();
      this.filterEcobs();
      this.filterFormatos();
      this.filterSistemas();
      this.filterSubsistemas();
      this.filterIfcBuildingElements();
      this.filterElementosBimITec();
    });
  }

  // applyFilters() {
  //   this.filteredBims = this.bims
  //     .filter(bim => this.selectedEcob ? bim.ecob === this.selectedEcob : true) 
  // }

  onFilterChange(filterType: string, filterValue: any) {
    this.filterChange.emit({ type: filterType, value: filterValue });
    // this.applyFilters();
  }

  public filterEcobs() {
    this.filterService.getEcobs().subscribe(data => {
      // this.ecobs = data.ecobs;
      this.ecobs = data.ecobs.filter(ecob =>
        this.bims.some(bim =>
          bim.ecob.toLowerCase().includes(ecob.label.toLowerCase())
        )
      );
    });
  }

  public filterFormatos() {
    this.filterService.getFormatos().subscribe(data => {
      this.formatos = data.formatos;
    });
  }

  public filterSistemas() {
    this.filterService.getSistemas().subscribe(data => {
      // this.sistemasG = data.sistemasG;
      this.sistemasG = data.sistemasG.filter(sistema =>
        this.bims.some(bim =>
          bim.sistema.toLowerCase().includes(sistema.label.toLowerCase())
        )
      );
    });
  }

  public filterSubsistemas() {
    this.filterService.getSubsistemas().subscribe(data => {
      // this.subsistemasG = data.subsistemasG;
      this.subsistemasG = data.subsistemasG.filter(subsistema =>
        this.bims.some(bim =>
          bim.subsistema.toLowerCase().includes(subsistema.label.toLowerCase())
        )
      );
    });
  }

  public filterIfcBuildingElements() {
    this.filterService.getIfcBuildingElements().subscribe(data => {
      // this.ifcBuildingElementsG = data.ifcBuildingElementsG;
      this.ifcBuildingElementsG = data.ifcBuildingElementsG.filter(ifcBuildingElement =>
        this.bims.some(bim =>
          bim.IfcBuildingElement.toLowerCase().includes(ifcBuildingElement.label.toLowerCase())
        )
      );
    });
  }

  public filterElementosBimITec() {
    this.filterService.getElementosBimITeCG().subscribe(data => {
      // this.elementosBimItecG = data.elementosBimItecG;
      this.elementosBimItecG = data.elementosBimItecG.filter(elementosBimItec =>
        this.bims.some(bim =>
          bim.classeBimITeC.toLowerCase().includes(elementosBimItec.label.toLowerCase())
        )
      );
    });
  } 

  public sortbimsDesc(): void {
    this.bims = this.bims.sort((a, b) => b.description.localeCompare(a.description));
  }

  public sortbimsAsc() {
    this.bims = this.bims.sort((a, b) => a.description.localeCompare(b.description));
  }
}