import { Component } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { FilterGService } from '../../services/filterG.service';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrl: './dashboard-detail.component.css'
})
export class DashboardDetailComponent {
  bims: ObjectBIM[] = [];
  
  constructor(private filterService: FilterGService) {}
  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bims = data.bims;
      // this.filteredBims = this.bims.slice();
    });
  }
}
