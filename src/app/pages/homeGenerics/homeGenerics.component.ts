import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { FilterGService } from '../../services/filterG.service';
import { Filters } from '../../interfaces/filter';
import { MatAccordion } from '@angular/material/expansion';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-homeGenerics',
  templateUrl: './homeGenerics.component.html',
  styleUrl: './homeGenerics.component.css'
})
export class HomeGenericsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Output() filterChange = new EventEmitter<any>();
  ecobs: Filters[] = [];
  sistemasG: Filters[] = [];
  subsistemasG: Filters[] = [];
  ifcBuildingElementsG: Filters[] = [];
  elementosBimItecG: Filters[] = [];
  searchTerm = "";
  selectedEcob = "";
  selectedSistema = "";
  selectedSubsistema = "";
  selectedIfcBuildingElement = "";
  selectedElementosBimItec = "";
  bims: ObjectBIM[] = [];

  constructor(private filterService: FilterGService, private sessionService: SessionService) { }

  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bims = data.bims;
      this.sortbimsAsc();
      this.filterEcobs();
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
      this.ecobs = data.ecobs.filter(ecob =>
        this.bims.some(bim =>
          bim.ecob.includes(ecob.label)
        )
      );
    });
  }

  public filterSistemas() {
    this.filterService.getSistemas().subscribe(data => {
      this.sistemasG = data.sistemasG.filter(sistema =>
        this.bims.some(bim =>
          bim.sistema.includes(sistema.label)
        )
      );
    });
  }

  public filterSubsistemas() {
    this.filterService.getSubsistemas().subscribe(data => {
      this.subsistemasG = data.subsistemasG.filter(subsistema =>
        this.bims.some(bim =>
          bim.subsistema.includes(subsistema.label)
        )
      );
    });
  }

  public filterIfcBuildingElements() {
    this.filterService.getIfcBuildingElements().subscribe(data => {
      this.ifcBuildingElementsG = data.ifcBuildingElementsG.filter(ifcBuildingElement =>
        this.bims.some(bim =>
          bim.IfcBuildingElement.includes(ifcBuildingElement.label)
        )
      );
    });
  }

  public filterElementosBimITec() {
    this.filterService.getElementosBimITeCG().subscribe(data => {
      this.elementosBimItecG = data.elementosBimItecG.filter(elementosBimItec =>
        this.bims.some(bim =>
          bim.classeBimITeC.includes(elementosBimItec.label)
        )
      );
    });
  }

  public sortbimsAsc() {
    this.bims = this.bims.sort((a, b) => a.description.localeCompare(b.description));
  }
}