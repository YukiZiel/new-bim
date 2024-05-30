import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logStatus(status: string) {
    console.log('Estado:' +  status);
  }
  constructor() { }
}
