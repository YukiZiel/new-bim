import { Component, OnInit } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import { ImgCellComponent } from '../../shared/img-cell/img-cell.component';
import { FilterGService } from '../../services/filterG.service';
import { MenuModule } from 'ag-grid-enterprise';
import { FilterFService } from '../../services/filterF.service';
import { Router } from '@angular/router';

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
  constructor(private filterService: FilterFService, private router: Router) {}

  ngOnInit(): void {
    this.filterService.getBims().subscribe(data => {
      this.rowData = data.bimsF;
    });
  }

  // Evento que redirige a la página de detalle del objeto BIM
  onCellClicked(event: any): void {
  if (event.colDef.field === 'description' || event.colDef.field === 'img') {
    const objectId = event.data.id; // Obtener el ID del objeto BIM
    const currentRoute = 'fabricantes'; // Obtener la ruta actual
    this.router.navigate(['/bim', objectId], { queryParams: { from: currentRoute } }); // Redirigir a la página de detalle
  }
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
}
