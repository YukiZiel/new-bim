import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private userKey = 'currentUser';

  constructor() { }

  // Método para verificar si hay una sesión iniciada
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem(this.userKey);
  }

  
  // Método para obtener los datos del usuario logueado
  getUserData(): any {
    const userData = sessionStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }
  
}
