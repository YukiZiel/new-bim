import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FilterGService } from '../../services/filterG.service';
import { ObjectBIM } from '../../interfaces/object-bim';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent{


  //*** Variables i Listeners del Resizer ***//
  @ViewChild('resizable2Element') resizable2Element!: ElementRef;
  height: number = 325; // Initial height
  minHeight: number = 65; // Minimum height
  maxHeight: number = 0; // Maximum height
  resizing: boolean = false;
  elementTop: number = 0;
  tancarPropietats: boolean = false;

  onResizeStart(event: MouseEvent) {
    event.preventDefault();
    this.resizing = true;

    const rect = this.resizable2Element.nativeElement.getBoundingClientRect();
    this.elementTop = rect.top;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.resizing) {

      const propietatsElem = document.getElementById("propietatsHeight")!;
      const computedStyle = window.getComputedStyle(propietatsElem);
      this.maxHeight = propietatsElem!.offsetHeight + parseFloat(computedStyle.marginTop) + parseFloat(computedStyle.marginBottom) + 1;
      
      const newHeight = event.clientY - this.elementTop;
      // Apply the min and max height constraint
      this.height = Math.max(this.minHeight, Math.min(this.maxHeight, newHeight));
      this.resizable2Element.nativeElement.style.height = `${this.height}px`;

      document.body.style.cursor = 'n-resize';
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.resizing) {
      this.resizing = false;
      document.body.style.cursor = 'auto';
    }
  }

  
}
  
