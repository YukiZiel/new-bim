import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => { // Guardia de Ruta
  
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) { // El guardia llama al método isAuthenticated() del AuthService para verificar si el usuario está autenticado
      return true;
    } else {
      router.navigate(['/login']); // Si el usuario no está autenticado, el guardia redirige al usuario a la ruta de inicio de sesión (/login) usando el Router y retorna false para evitar la navegación a la ruta protegida
      return false;
    }
 }

 // Asegura de que solo los usuarios autenticados puedan acceder a ciertas rutas
 // Si un usuario no está autenticado, el guardia redirige al usuario a la página de inicio de sesión (/login)