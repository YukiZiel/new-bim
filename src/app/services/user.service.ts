import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any;

  constructor() { }
  
  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
  // private userDataSubject = new BehaviorSubject<any>(null);

  // constructor() { }
  
  // setUserData(data: any) {
  //   this.userDataSubject.next(data);
  // }

  // getUserData(): Observable<any> {
  //   return this.userDataSubject.asObservable();
  // }
}
