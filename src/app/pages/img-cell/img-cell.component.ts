import { Component, Input, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ObjectBIM } from '../../interfaces/object-bim';
import { FilterGService } from '../../services/filterG.service';

@Component({
  selector: 'app-img-cell',
  templateUrl: './img-cell.component.html',
  styleUrl: './img-cell.component.css'
})
export class ImgCellComponent implements OnInit, ICellRendererAngularComp{
  @Input() objectBim!: ObjectBIM;
  bims: ObjectBIM[] = [];
  // public value: string = '';
  // public image: string = '';
  // public image?: string;
  value:any;
  agInit(params: ICellRendererParams): void {
    this.objectBim = params.data; 
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false; 
  }
  
  constructor(private filterService: FilterGService) { }

  onClick(event:any) {
    alert('Falta imagen');
  }

  ngOnInit(): void {
    this.filterService.getBims().subscribe(data => {
      this.bims = data.bims;
    });
  }
}
