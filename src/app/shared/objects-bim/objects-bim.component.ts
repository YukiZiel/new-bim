import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AddFavService } from '../../services/add-fav.service';

@Component({
  selector: 'app-object-bim',
  templateUrl: './objects-bim.component.html',
  styleUrl: './objects-bim.component.css'
})
export class ObjectsBimComponent {
  @Input() objectBim!: ObjectBIM;
  // @Output() bimClicked = new EventEmitter<string>();
  constructor(private addFavService: AddFavService) {}

  // addFavorite() {
  // }

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
