import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ObjectBIM, Props } from '../../interfaces/object-bim';
import { FilterFService } from '../../services/filterF.service';
import { Filters } from '../../interfaces/filter';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-homeFabricants',
  templateUrl: './homeFabricants.component.html',
  styleUrl: './homeFabricants.component.css'
})
export class HomeFabricantsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Output() filterChange = new EventEmitter<any>();
  ecobs: Filters[] = [];
  empresas: Filters[] = [];
  sistemasF: Filters[] = [];
  subsistemasF: Filters[] = [];
  ifcBuildingElementsF: Filters[] = [];
  elementosBimItecF: Filters[] = [];
  searchTerm = "";
  selectedEcob = "";
  selectedEmpresa = "";
  selectedSistema = "";
  selectedSubsistema = "";
  selectedIfcBuildingElement = "";
  selectedElementosBimItec = "";
  bimsF: ObjectBIM[] = [];

  constructor(private filterService: FilterFService) { }

  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bimsF = data.bimsF;
      this.sortbimsAsc();
      this.filterEcobs();
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

  public filterEcobs() {
    this.filterService.getEcobs().subscribe(data => {
      this.ecobs = data.ecobs;
    });
  }

  public filterEmpresas() {
    this.filterService.getEmpresas().subscribe(data => {
      this.empresas = data.empresas;
    });
  }

  public filterSistemas() {
    this.filterService.getSistemas().subscribe(data => {
      this.sistemasF = data.sistemasF.filter(sistema =>
        this.bimsF.some(bim =>
          bim.sistema.includes(sistema.label)
        )
      );
    });
  }

  public filterSubsistemas() {
    this.filterService.getSubsistemas().subscribe(data => {
      this.subsistemasF = data.subsistemasF.filter(subsistema =>
        this.bimsF.some(bim =>
          bim.subsistema.includes(subsistema.label)
        )
      );
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

  public sortbimsAsc() {
    this.bimsF = this.bimsF.sort((a, b) => a.description.localeCompare(b.description));
  }
}
