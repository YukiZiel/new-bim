import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../interfaces/filter';
import { ObjectBIM } from '../interfaces/object-bim';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterFService {

  private jsonUrl = '../assets/bimsFabricants.json';
  private ecobs = '../assets/ecobs.json';
  private formatos = '../assets/formatos.json';
  private empresas = '../assets/fabricants/empresas.json';
  private sistemas = '../assets/fabricants/sistemaF.json';
  private subsistemas = '../assets/fabricants/subsistemasF.json';
  private ifcBuildingElements = '../assets/fabricants/ifcBuildingElementF.json';
  private elementosBimItec = '../assets/fabricants/elementosBimItecF.json';
  
  constructor(private http:HttpClient) { }

  getBims(): Observable<{bimsF:ObjectBIM[]}> {
    return this.http.get<{bimsF:ObjectBIM[]}>(this.jsonUrl);
  }

  getEcobs(): Observable<{ecobs:Filters[]}> {
    return this.http.get<{ecobs:Filters[]}>(this.ecobs);
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

  getDetail(id: string): Observable<ObjectBIM | undefined> {
    return this.getBims().pipe(map(response => response.bimsF.find(bim => bim.id === id)))
  }
}
