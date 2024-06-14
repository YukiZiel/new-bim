import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ObjectBIM } from '../interfaces/object-bim';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseUrl = 'http://localhost/new-bim/php/favorites.php';
  private baseUrl = 'https://new-bim.000webhostapp.com/php/favorites.php';

  // private userKey = 'currentUser';
  
  constructor( private http: HttpClient ) { }
  
  // saveFav(userData: any[]): void {
  //   localStorage.setItem(this.userKey, JSON.stringify(userData));
  // }

  getFavoriteObjects(userid: string): Observable<ObjectBIM[]> {
    return this.http.get<ObjectBIM[]>(`${this.baseUrl}?userid=${userid}`);
  }

  toggleFavorite(userid: string, objectid: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, { userid, objectid });
  }

}
