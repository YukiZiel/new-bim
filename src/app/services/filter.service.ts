import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../filter';
import { ObjectBIM } from '../object-bim';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private jsonUrl = '../assets/bimsGenerics.json';
  private sistemas = '../assets/generics/sistemaG.json';
  private subsistemas = '../assets/generics/subsistemaG.json';
  private formatos = '../assets/formatos.json';
  private ifcBuildingElementsG = '../assets/generics/ifcBuildingElementG.json';
  private elementosBimItecG = '../assets/generics/elementosBimItecG.json';
  
  constructor(private http:HttpClient) { }

  getBims(): Observable<{bims:ObjectBIM[]}> {
    return this.http.get<{bims:ObjectBIM[]}>(this.jsonUrl);
  }

  getSistemas(): Observable<{sistemasG:Filters[]}> {
    return this.http.get<{sistemasG:Filters[]}>(this.sistemas);
  }

  getSubsistemas(): Observable<{subsistemasG:Filters[]}> {
    return this.http.get<{subsistemasG:Filters[]}>(this.subsistemas);
  }

  getFormatos(): Observable<{formatos:Filters[]}> {
    return this.http.get<{formatos:Filters[]}>(this.formatos);
  }

  getIfcBuildingElements(): Observable<{ifcBuildingElementsG:Filters[]}> {
    return this.http.get<{ifcBuildingElementsG:Filters[]}>(this.ifcBuildingElementsG);
  }

  getElementosBimITeCG(): Observable<{elementosBimItecG:Filters[]}> {
    return this.http.get<{elementosBimItecG:Filters[]}>(this.elementosBimItecG);
  }
}
