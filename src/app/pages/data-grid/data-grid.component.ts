import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ColDef, IDateFilterParams } from 'ag-grid-community'; // Column Definition Type Interface
import { ObjectBIM } from '../../interfaces/object-bim';
import { HttpClient } from '@angular/common/http';
import { FilterGService } from '../../services/filterG.service';
import { ResizableComponent } from '../../shared/resizable/resizable.component';
// import '@ag-grid-community/styles/ag-grid.css';
// import '@ag-grid-community/styles/ag-theme-quartz.css';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css'
})

export class DataGridComponent implements OnInit {

  rowData: ObjectBIM[] = [];

  colDefs: ColDef<ObjectBIM>[] = [
    { field: 'description', headerName: 'Nombre', flex: 2, filter: true },
    { field: 'id', flex: 1, filter: true },
    { field: 'dataEmissio', headerName: 'Fecha de emisión', flex: 1, comparator: dateComparator,},
    { field: 'patrocinatTxt', headerName: 'Patrocinado por', flex: 1, filter: 'agSetColumnFilter'},
    { field: 'ecob', headerName: 'eCOB®', flex: 1, sortable: false },
    { 
      field: 'downloads', 
      headerName: 'Descargas', 
      flex: 1,
      cellRenderer: (params: any) => this.downloadCellRenderer(params), sortable: false
    }
  ];

  
  defaultColDef: ColDef = {
    flex: 1,
    filter: false,
    sortable: true,
  };

  // resizing = false;
  // size = 300;
  // @Input() maxHeight = 600;
  constructor(private filterService: FilterGService) {}

  ngOnInit(): void {
    this.filterService.getBims().subscribe(data => {
      // console.log('BIM Data:', data); 
      this.rowData = data.bims;
    });
  }

  downloadCellRenderer(params: any): string {
    if (params.value && params.value.length > 0) {
      return params.value.map((download: any) => 
        download.formatdown.map((formatItem: any) => 
          `<a href="https://bedec.itec.cat/img/${params.data.idemp}/${formatItem.fitxer}" target="_blank" title="${formatItem.format}">
            <img src="../../../assets/images/download.png" alt="icono download" width="20">
          </a>`
        ).join(' ')
      ).join(' ');
    }
    return '';
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   if (this.resizing) {
  //       const newHeight = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
  //       this.size = Math.max(5, Math.min(newHeight, this.maxHeight));
  //       document.body.style.cursor = 'ns-resize';
  //   }
  // }
  
  // onResizeStart(event: MouseEvent) {
  //   event.preventDefault();
  //   this.resizing = true;
  // }

}

// DATE COMPARATOR FOR SORTING
function dateComparator(date1:any, date2:any) {
  var date1Number = _monthToNum(date1);
  var date2Number = _monthToNum(date2);

  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }

  return date1Number - date2Number;
}

// HELPER FOR DATE COMPARISON
function _monthToNum(date:any) {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }

  var yearNumber = date.substring(6, 10);
  var monthNumber = date.substring(3, 5);
  var dayNumber = date.substring(0, 2);

  var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
  // 29/08/2004 => 20040829
  return result;
}

