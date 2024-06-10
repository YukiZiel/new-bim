import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AddFavService } from '../../services/add-fav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-object-bim',
  templateUrl: './objects-bim.component.html',
  styleUrl: './objects-bim.component.css'
})
export class ObjectsBimComponent {
  @Input() objectBim!: ObjectBIM;
  // @Output() bimClicked = new EventEmitter<string>();
  constructor(private router: Router, private addFavService: AddFavService) {}

  navigateToDetail(id:string): void {
    this.router.navigate(['/bim', id])
  }

  toggleFavList(objectBim:ObjectBIM) {
    if (this.inFavList(objectBim)) {
      this.addFavService.removeFromFavList(objectBim);
    } else {
      this.addFavService.addFav(objectBim);
    }
  }

  inFavList(objectBim: ObjectBIM) : boolean {
    return this.addFavService.inFavList(objectBim);
  }

  // onClick() {
  //   this.bimClicked.emit(this.objectBim.id);
  // }
}
