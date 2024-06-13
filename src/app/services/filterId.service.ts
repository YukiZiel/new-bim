import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ObjectBIM } from '../interfaces/object-bim';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterIdService {
  // private properties = '../assets/3840.json';
  // constructor(private http:HttpClient) { }
  // getProp(): Observable<{prop:Properties[]}> {
  //   return this.http.get<{prop:Properties[]}>(this.properties);
  // }

  // private jsonUrlF = '../assets/bimsFabricants.json';
  // private jsonUrlG = '../assets/bimsGenerics.json';

  // constructor(private http: HttpClient) { }

  // getBims(): Observable<ObjectBIM[]> {
  //   const jsonF$ = this.http.get<BimTotal>(this.jsonUrlF).pipe(map(response => response.bimTotal));
  //   const jsonG$ = this.http.get<BimTotal>(this.jsonUrlG).pipe(map(response => response.bimTotal));

  //   return forkJoin([jsonF$, jsonG$]).pipe(
  //     map(([bims1, bims2]) => [...bims1, ...bims2])  // Combina los dos arrays de bims
  //   );
  // }

  // getDetail(id: string): Observable<ObjectBIM | undefined> {
  //   return this.getBims().pipe(
  //     map(bims => bims.find(bim => bim.id === id))
  //   );
  // }
}

