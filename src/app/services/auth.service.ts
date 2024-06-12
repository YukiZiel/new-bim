import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/new-bim/php/login.php'; // URL a la ruta de la API
  // private apiUrl = 'https://new-bim.000webhostapp.com/php/login.php';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.apiUrl, { email, password })
    .pipe(
      tap(response => {
        if (response.success) {
          this.loggedIn.next(true);
          localStorage.setItem('user', JSON.stringify(response.user));  // Guardar información del usuario en localStorage
          console.log('Usuario guardado');
        }
      })
    );
  }

  logout() {
    return this.http.post<any>(this.apiUrl, { action: 'logout' })
      .pipe(
        tap(response => {
          if (response.success) {
            this.loggedIn.next(false);
            localStorage.removeItem('user'); // Remover información del usuario de localStorage
            console.log('Usario borrado del localStorage');
          }
        })
      );
  }

  checkLoginStatus() {
    this.http.get<any>(`${this.apiUrl}?action=check-session`).subscribe(response => {
      if (response.isLoggedIn) {
        this.loggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(response.user)); // Actualizar información del usuario en localStorage
      } else {
        this.loggedIn.next(false);
        localStorage.removeItem('user'); // Remover información del usuario de localStorage
      }
    });
  }
}

