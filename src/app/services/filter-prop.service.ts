import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Properties } from '../interfaces/properties';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterPropService {
  private properties = '../assets/3840.json';
  constructor(private http:HttpClient) { }
  getProp(): Observable<{prop:Properties[]}> {
    return this.http.get<{prop:Properties[]}>(this.properties);
  }
}
