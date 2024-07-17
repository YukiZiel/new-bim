import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ObjectBIM } from '../interfaces/object-bim';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://new-bim.000webhostapp.com/php/favorites.php';
  
  constructor( private http: HttpClient ) { }
  // Este método obtiene la lista de objetos favoritos de un usuario específico
  getFavoriteObjects(userid: string): Observable<ObjectBIM[]> {
    return this.http.get<ObjectBIM[]>(`${this.baseUrl}?userid=${userid}`);
  }
  
  // Este método agrega o elimina un objeto BIM de la lista de favoritos de un usuario
  toggleFavorite(userid: string, objectid: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, { userid, objectid });
  }

}
