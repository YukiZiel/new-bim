import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userKey = 'currentUser';

  constructor() { }

  // Guarda los datos del usuario en el localStorage
  login(userData: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(userData));
  }

  // Elimina los datos del usuario del localStorage
  logout(): void {
    localStorage.removeItem(this.userKey);
  }

  // Obtiene los datos del usuario del localStorage
  getUserData(): any {
    const userData = localStorage.getItem(this.userKey);
    if (userData) {
      const userDataParsed = JSON.parse(userData);
      // Excluir la contraseña del objeto userDataParsed
      delete userDataParsed.userpassword;
      return userDataParsed;
    }
    
    return null;
  }

  // Verifica si hay un usuario autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) !== null;
  }
}

