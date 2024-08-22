import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ObjectBIM } from '../../interfaces/object-bim';
import { FilterGService } from '../../services/filterG.service';

@Component({
  selector: 'app-img-cell',
  templateUrl: './img-cell.component.html',
  styleUrl: './img-cell.component.css'
})
export class ImgCellComponent{
  @Input() objectBim!: ObjectBIM;
  bims: ObjectBIM[] = [];
  // public value: string = '';
  // public image: string = '';

  // agInit(params: ICellRendererParams): void {
  //   this.value = params.value;
  //   this.image = params.data.image;
  // }

  // refresh(params: ICellRendererParams): boolean {
  //   this.value = params.value;
  //   this.image = params.data.image;
  //   return true;
  // }
  
  constructor(private filterService: FilterGService) { }

  ngOnInit() {
    this.filterService.getBims().subscribe(data => {
      this.bims = data.bims;
    });
  }
}
