import { Component } from '@angular/core';
import { ObjectBIM } from '../../object-bim';
import { BimService } from '../../services/bim.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  bims: ObjectBIM[] = [];

  constructor(private bimService:BimService) {}

  ngOnInit() {
    this.bimService.getBims().subscribe(data => {
      this.bims = data.bims;
      this.sortbimsAsc();
    })
  }

  public sortbimsDesc(): void {
    this.bims = this.bims.sort((a, b) => b.description.localeCompare(a.description));
  }

  public sortbimsAsc() {
    this.bims = this.bims.sort((a, b) => a.description.localeCompare(b.description));
  }

}
