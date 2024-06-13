import { Injectable } from '@angular/core';
import { ObjectBIM } from '../interfaces/object-bim';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFavService {

  private baseUrl = 'http://localhost/new-bim/php/favorites.php';
  private favList: ObjectBIM[] = [];
  private favListItems = 'favListItems';
  constructor(private http: HttpClient) {
    // const favListItems = localStorage.getItem(this.favListItems);
    // if (favListItems) {
    //   this.favList = JSON.parse(favListItems);
    // }
   }

//   inFavList(objectBim: ObjectBIM) : boolean {
//     // return this.favList.some(favorite => favorite.id === objectBim.id);
// }

  // addFav(objectBim: ObjectBIM): void {
  //   this.favList.push(objectBim);
  //   localStorage.setItem(this.favListItems, JSON.stringify(this.favList));
  // }

  addFav(userid: string, objectid: string): Observable<any> {
    const url = `${this.baseUrl}`; // URL del script PHP para añadir favorito
    const body = { userid, objectid };
    return this.http.post<any>(url, body);
  }

  removeFromFavList(objectBim: ObjectBIM): void {
    const index = this.favList.findIndex(favorite => favorite.id === objectBim.id);
    if (index !== -1) {
      this.favList.splice(index, 1);
      localStorage.setItem(this.favListItems, JSON.stringify(this.favList));
    }
  }
}
