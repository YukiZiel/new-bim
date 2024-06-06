import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filters } from '../filter';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  @Output() filterChange = new EventEmitter<any>();
  @Input() formatoOptions = [];
  sistemasG: Filters[] = [];
  subsistemasG: Filters[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.getSistemas().subscribe(data => {
      this.sistemasG = data.sistemasG;
    });
  }

  onFilterChange(filterType: string, filterValue: any) {
    this.filterChange.emit({ type: filterType, value: filterValue });
  }
}
