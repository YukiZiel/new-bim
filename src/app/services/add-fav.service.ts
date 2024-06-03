import { Injectable } from '@angular/core';
import { ObjectBIM } from '../object-bim';

@Injectable({
  providedIn: 'root'
})
export class AddFavService {
  private favList: ObjectBIM[] = [];
  constructor() { }

  inFavList(objectBim: ObjectBIM) : boolean {
    return this.favList.some(favorite => favorite.id === objectBim.id);
  }

  addFav(objectBim: ObjectBIM): void {
    this.favList.push(objectBim);
  }

  removeFromFavList(objectBim: ObjectBIM): void {
    const index = this.favList.findIndex(favorite => favorite.id === objectBim.id);
    if (index !== -1) {
      this.favList.splice(index, 1);
    }
  }
}
