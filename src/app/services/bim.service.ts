import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ObjectBIM } from '../object-bim';

@Injectable({
  providedIn: 'root'
})
export class BimService {
  private jsonUrl = '../assets/bimsGenerics.json';

  constructor(private http:HttpClient) { }

  getBims(): Observable<{bims:ObjectBIM[]}> {
    return this.http.get<{bims:ObjectBIM[]}>(this.jsonUrl);
  }
}
