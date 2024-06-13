import { Injectable } from '@angular/core';
import { ObjectBIM } from '../interfaces/object-bim';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFavService {

  private baseUrl = 'http://localhost/new-bim/php/favorites.php';

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

  removeFromFavList(userid: string, objectid: string): Observable<any> {
    const url = `${this.baseUrl}`;
    const body = { userid: userid, objectid: objectid };
    return this.http.request<any>('delete', url, { body });
  }

  checkFavorite(userid: string, objectid: string): Observable<any> {
    const url = `${this.baseUrl}`;
    const body = { userid: userid, objectid: objectid };
    return this.http.post<any>(url, body);
  }
}
