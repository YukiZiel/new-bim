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
  // ecob:  Filters[] = [];
  formatos: Filters[] = [];
  sistemasG: Filters[] = [];
  subsistemasG: Filters[] = [];
  ifcBuildingElementsG: Filters[] = [];
  elementosBimItecG: Filters[] = [];
  searchTerm = "";
  // selectedEcob = "";
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

      this.filterSistemas();
      this.filterSubsistemas();
      this.filterFormatos();
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

  // public filterEcob() {
  //   this.filterService.getEcob().subscribe(data => {
  //     this.ecob = data.ecob;
  //   });
  // }

  public filterFormatos() {
    this.filterService.getFormatos().subscribe(data => {
      this.formatos = data.formatos;
    });
  }

  public filterSistemas() {
    this.filterService.getSistemas().subscribe(data => {
      this.sistemasG = data.sistemasG;
    });
  }

  public filterSubsistemas() {
    this.filterService.getSubsistemas().subscribe(data => {
      this.subsistemasG = data.subsistemasG;
    });
  }

  public filterIfcBuildingElements() {
    this.filterService.getIfcBuildingElements().subscribe(data => {
      this.ifcBuildingElementsG = data.ifcBuildingElementsG;
    });
  }

  public filterElementosBimITec() {
    this.filterService.getElementosBimITeCG().subscribe(data => {
      this.elementosBimItecG = data.elementosBimItecG;
    });
  } 

  public sortbimsDesc(): void {
    this.bims = this.bims.sort((a, b) => b.description.localeCompare(a.description));
  }

  public sortbimsAsc() {
    this.bims = this.bims.sort((a, b) => a.description.localeCompare(b.description));
  }
}