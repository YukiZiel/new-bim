import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../filter';
import { ObjectBIM } from '../object-bim';

@Injectable({
  providedIn: 'root'
})
export class FilterFService {

  private jsonUrl = '../assets/bimsFabricants.json';
  private ecob = '../assets/fabricants/ecobF.json';
  private formatos = '../assets/formatos.json';
  private empresas = '../assets/fabricants/empresas.json';
  private sistemas = '../assets/fabricants/sistemaF.json';
  private subsistemas = '../assets/fabricants/subsistemaF.json';
  private ifcBuildingElements = '../assets/fabricants/ifcBuildingElementF.json';
  private elementosBimItec = '../assets/fabricants/elementosBimItecF.json';
  
  constructor(private http:HttpClient) { }

  getBims(): Observable<{bimsF:ObjectBIM[]}> {
    return this.http.get<{bimsF:ObjectBIM[]}>(this.jsonUrl);
  }

  getEcob(): Observable<{ecobF:Filters[]}> {
    return this.http.get<{ecobF:Filters[]}>(this.ecob);
  }
  
  getEmpresas(): Observable<{empresas:Filters[]}> {
    return this.http.get<{empresas:Filters[]}>(this.empresas);
  }

  getFormatos(): Observable<{formatos:Filters[]}> {
    return this.http.get<{formatos:Filters[]}>(this.formatos);
  }

  getSistemas(): Observable<{sistemasF:Filters[]}> {
    return this.http.get<{sistemasF:Filters[]}>(this.sistemas);
  }

  getSubsistemas(): Observable<{subsistemasF:Filters[]}> {
    return this.http.get<{subsistemasF:Filters[]}>(this.subsistemas);
  }

  getIfcBuildingElements(): Observable<{ifcBuildingElementsF:Filters[]}> {
    return this.http.get<{ifcBuildingElementsF:Filters[]}>(this.ifcBuildingElements);
  }

  getElementosBimITeCF(): Observable<{elementosBimItecF:Filters[]}> {
    return this.http.get<{elementosBimItecF:Filters[]}>(this.elementosBimItec);
  }
}
