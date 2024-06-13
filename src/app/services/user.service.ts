import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ObjectBIM } from '../interfaces/object-bim';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost/new-bim/php/favorites.php';


  constructor( private http: HttpClient ) { }
  
  getFavoriteObjects(userid: string): Observable<ObjectBIM[]> {
    return this.http.get<ObjectBIM[]>(`${this.baseUrl}?userid=${userid}`);
  }

  toggleFavorite(userid: string, objectid: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, { userid, objectid });
  }
  // constructor() { }
  
  // setUserData(data: any) {
  //   this.userDataSubject.next(data);
  // }

  // getUserData(): Observable<any> {
  //   return this.userDataSubject.asObservable();
  // }
}
