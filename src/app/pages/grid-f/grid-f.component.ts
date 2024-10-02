import { Component, OnInit } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import { ImgCellComponent } from '../../shared/img-cell/img-cell.component';
import { FilterGService } from '../../services/filterG.service';
import { MenuModule } from 'ag-grid-enterprise';
import { FilterFService } from '../../services/filterF.service';

@Component({
  selector: 'app-grid-f',
  templateUrl: './grid-f.component.html',
  styleUrl: './grid-f.component.css'
})
export class GridFComponent implements OnInit{
  rowData: ObjectBIM[] = [];
  enableRangeSelection: boolean = true;
  rowSelection: 'multiple' | 'single' | undefined = 'multiple';
  rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' | undefined =
    'always';

  colDefs: ColDef<ObjectBIM>[] = [
    { 
      field: 'description', 
      headerName: 'Nombre', 
      cellRenderer: ImgCellComponent,
      cellRendererParams: {
        innerRenderer: ImgCellComponent,
      },
      cellStyle: { 
        'white-space': 'normal', 
        'word-wrap': 'break-word', 
        'line-height': '1.5' 
      },
      minWidth: 300,
      flex: 2, 
      filter: true,
      enableRowGroup: true,
      enableValue: true,
      resizable: false
    },
    { 
      field: 'id', 
      flex: 1, 
      enableRowGroup: true,
      enableValue: true,
      filter: true 
    },
    { 
      field: 'empresa',
      cellStyle: { 
        'white-space': 'normal', 
        'word-wrap': 'break-word', 
        'line-height': '1.5' 
      },
      flex: 1, 
      enableRowGroup: true,
      enableValue: true,
      filter: true
    },
    { 
      field: 'ecob', 
      headerName: 'eCOB®', 
      flex: 1, 
      filter: true 
    },
    { 
      field: 'downloads', 
      headerName: 'Descargas', 
      flex: 1,
      cellRenderer: (params: any) => this.downloadCellRenderer(params), 
      sortable: false
    }
  ];

  rowHeight = 80;
  
  defaultColDef: ColDef = {
    flex: 1,
    filter: false,
    sortable: true,
  };

  // resizing = false;
  // size = 300;
  // @Input() maxHeight = 600;
  constructor(private filterService: FilterFService) {}

  ngOnInit(): void {
    this.filterService.getBims().subscribe(data => {
      this.rowData = data.bimsF;
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

  onResizeSuperior(newHeight: number) {
    const superiorElement = document.querySelector('.componente-superior') as HTMLElement;
    const inferiorElement = document.querySelector('.componente-inferior') as HTMLElement;

    if (superiorElement && inferiorElement) {
      superiorElement.style.height = `${newHeight}px`;
      inferiorElement.style.height = `${window.innerHeight - newHeight}px`;
    }
  }

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
