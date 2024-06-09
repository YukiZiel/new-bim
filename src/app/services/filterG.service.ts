import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../filter';
import { ObjectBIM } from '../object-bim';

@Injectable({
  providedIn: 'root'
})
export class FilterGService {

  private jsonUrl = '../assets/bimsGenerics.json';
  private ecob = '../assets/generics/ecobG.json';
  private formatos = '../assets/formatos.json';
  private sistemas = '../assets/generics/sistemaG.json';
  private subsistemas = '../assets/generics/subsistemaG.json';
  private ifcBuildingElements = '../assets/generics/ifcBuildingElementG.json';
  private elementosBimItec = '../assets/generics/elementosBimItecG.json';
  
  constructor(private http:HttpClient) { }

  getBims(): Observable<{bims:ObjectBIM[]}> {
    return this.http.get<{bims:ObjectBIM[]}>(this.jsonUrl);
  }

  getEcob(): Observable<{ecob:Filters[]}> {
    return this.http.get<{ecob:Filters[]}>(this.ecob);
  }
  
  getFormatos(): Observable<{formatos:Filters[]}> {
    return this.http.get<{formatos:Filters[]}>(this.formatos);
  }

  getSistemas(): Observable<{sistemasG:Filters[]}> {
    return this.http.get<{sistemasG:Filters[]}>(this.sistemas);
  }

  getSubsistemas(): Observable<{subsistemasG:Filters[]}> {
    return this.http.get<{subsistemasG:Filters[]}>(this.subsistemas);
  }

  getIfcBuildingElements(): Observable<{ifcBuildingElementsG:Filters[]}> {
    return this.http.get<{ifcBuildingElementsG:Filters[]}>(this.ifcBuildingElements);
  }

  getElementosBimITeCG(): Observable<{elementosBimItecG:Filters[]}> {
    return this.http.get<{elementosBimItecG:Filters[]}>(this.elementosBimItec);
  }
}
