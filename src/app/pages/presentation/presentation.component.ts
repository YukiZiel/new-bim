import { Component, OnInit } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { FilterGService } from '../../services/filterG.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit {
  searchTerm = "";
  bims: ObjectBIM[] = [];

  constructor(private filterService: FilterGService) { }

  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bims = data.bims;
    });

  }
}
