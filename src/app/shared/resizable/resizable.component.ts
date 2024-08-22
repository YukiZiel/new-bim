
import { Component, Input, HostListener, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'resizable',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.scss']
})
export class ResizableComponent implements OnInit {
  @Input() maxWidth = 800;
  @Input() maxHeight = 800;
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Output() resizeSuperior = new EventEmitter<number>(); // Emite la nueva altura al componente padre

  resizing = false;
  size = 500;
  isHorizontal = true;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.isHorizontal = this.direction === 'horizontal';
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    // 12
    if (this.resizing) {
      this.resizing = false;
      document.body.style.cursor = 'auto';
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.resizing) {
      if (this.isHorizontal) {
        const newWidth = event.clientX - this.el.nativeElement.getBoundingClientRect().left;
        this.size = Math.max(5, Math.min(newWidth, this.maxWidth));
        document.body.style.cursor = 'ew-resize';
      } else {
        const newHeight = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
        this.size = Math.max(5, Math.min(newHeight, this.maxHeight));
        document.body.style.cursor = 'ns-resize';
      }
      // const nuevaAlturaSuperior = event.clientY;
      // this.onResizeSuperior(nuevaAlturaSuperior);
    }
  }

  onResizeStart(event: MouseEvent) {
    event.preventDefault();
    this.resizing = true;
  }

  // onResizeSuperior(newHeight: number) {
  //   const superiorElement = document.querySelector('.componente-superior') as HTMLElement;
  //   const inferiorElement = document.querySelector('.componente-inferior') as HTMLElement;

  //   if (superiorElement && inferiorElement) {
  //     superiorElement.style.height = `${newHeight}px`;
  //     inferiorElement.style.height = `${window.innerHeight - newHeight}px`;
  //   } else {
  //     console.error('Uno o más elementos no se encontraron en el DOM.');
  //   }
  // }
}
