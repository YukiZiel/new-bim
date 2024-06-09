import { Injectable } from '@angular/core';
import { ObjectBIM } from '../interfaces/object-bim';

@Injectable({
  providedIn: 'root'
})
export class AddFavService {
  private favList: ObjectBIM[] = [];
  private favListItems = 'favListItems';
  constructor() {
    const favListItems = localStorage.getItem(this.favListItems);
    if (favListItems) {
      this.favList = JSON.parse(favListItems);
    }
   }

  inFavList(objectBim: ObjectBIM) : boolean {
    return this.favList.some(favorite => favorite.id === objectBim.id);
  }

  addFav(objectBim: ObjectBIM): void {
    this.favList.push(objectBim);
    localStorage.setItem(this.favListItems, JSON.stringify(this.favList));
  }

  removeFromFavList(objectBim: ObjectBIM): void {
    const index = this.favList.findIndex(favorite => favorite.id === objectBim.id);
    if (index !== -1) {
      this.favList.splice(index, 1);
      localStorage.setItem(this.favListItems, JSON.stringify(this.favList));
    }
  }
}
