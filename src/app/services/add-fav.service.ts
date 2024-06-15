import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFavService {

  // private baseUrl = 'http://localhost/new-bim/php/favorites.php';
  private baseUrl = 'https://new-bim.000webhostapp.com/php/favorites.php';

  constructor(private http: HttpClient) {
  }

  toggleFavorite(userId: string, objectId: string): Observable<any> {
    const body = { userid: userId, objectid: objectId };
    return this.http.post<any>(this.baseUrl, body);
  }

}