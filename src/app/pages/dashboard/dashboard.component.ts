import { Component } from '@angular/core';
import { ObjectBIM } from '../../object-bim';
import { FilterService } from '../../services/filter.service';
import { Filters } from '../../filter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  searchTerm = "";
  selectedSistemaG = "";
  bims: ObjectBIM[] = [];
  sistemasG: Filters[] = [];
  subsistemasG: Filters[] = [];

  constructor(private filterService:FilterService) {}

  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bims = data.bims;
      this.sortbimsAsc();
      this.filterSitemas();
    });

    // this.filterService.getSistemas().subscribe(data => {
    //   this.sistemasG = data.sistemasG;
    // });
    // this.filterService.getSubsistemas().subscribe(data => {
    //   this.subsistemasG = data.subsistemasG;
    // })
  }

  public filterSitemas() {
    this.filterService.getSistemas().subscribe(data => {
      this.sistemasG = data.sistemasG;
    });
  }

  public sortbimsDesc(): void {
    this.bims = this.bims.sort((a, b) => b.description.localeCompare(a.description));
  }

  public sortbimsAsc() {
    this.bims = this.bims.sort((a, b) => a.description.localeCompare(b.description));
  }

}
