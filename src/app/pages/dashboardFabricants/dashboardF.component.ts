import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ObjectBIM } from '../../object-bim';
import { FilterFService } from '../../services/filterF.service';
import { Filters } from '../../filter';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-dashboardF',
  templateUrl: './dashboardF.component.html',
  styleUrl: './dashboardF.component.css'
})
export class DashboardFComponent implements OnInit{
  @ViewChild( MatAccordion ) accordion!: MatAccordion;
  @Output() filterChange = new EventEmitter<any>();
  ecobF:  Filters[] = [];
  formatos: Filters[] = [];
  empresas: Filters[] = [];
  sistemasF: Filters[] = [];
  subsistemasF: Filters[] = [];
  ifcBuildingElementsF: Filters[] = [];
  elementosBimItecF: Filters[] = [];
  searchTerm = "";
  selectedEcob = "";
  selectedFormato = "";
  selectedEmpresa = "";
  selectedSistema = "";
  selectedSubsistema = "";
  selectedIfcBuildingElement = "";
  selectedElementosBimItec ="";
  bimsF: ObjectBIM[] = [];
  constructor(private filterService: FilterFService) {}

  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bimsF = data.bimsF;
      this.sortbimsAsc();
      this.filterEcob();
      this.filterFormatos();
      this.filterEmpresas();
      this.filterSistemas();
      this.filterSubsistemas();
      this.filterIfcBuildingElements();
      this.filterElementosBimITec();
    });
  }

  onFilterChange(filterType: string, filterValue: any) {
    this.filterChange.emit({ type: filterType, value: filterValue });
  }

  public filterEcob() {
    this.filterService.getEcob().subscribe(data => {
      this.ecobF = data.ecobF;
    });
  }

  public filterFormatos() {
    this.filterService.getFormatos().subscribe(data => {
      this.formatos = data.formatos;
    });
  }

  public filterEmpresas() {
    this.filterService.getEmpresas().subscribe(data => {
      this.empresas = data.empresas;
    });
  }

  public filterSistemas() {
    this.filterService.getSistemas().subscribe(data => {
      this.sistemasF = data.sistemasF;
    });
  }

  public filterSubsistemas() {
    this.filterService.getSubsistemas().subscribe(data => {
      this.subsistemasF = data.subsistemasF;
    });
  }

  public filterIfcBuildingElements() {
    this.filterService.getIfcBuildingElements().subscribe(data => {
      this.ifcBuildingElementsF = data.ifcBuildingElementsF;
    });
  }

  public filterElementosBimITec() {
    this.filterService.getElementosBimITeCF().subscribe(data => {
      this.elementosBimItecF = data.elementosBimItecF;
    });
  } 

  public sortbimsDesc(): void {
    this.bimsF = this.bimsF.sort((a, b) => b.description.localeCompare(a.description));
  }

  public sortbimsAsc() {
    this.bimsF = this.bimsF.sort((a, b) => a.description.localeCompare(b.description));
  }
}
