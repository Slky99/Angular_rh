import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

export function authGuardFactory(authService: AuthServiceService): CanActivateFn {
  return (route, state) => {
    const isAuthenticated = authService.isAuthenticated();

    if (isAuthenticated) {
      return true;
    } else {
      authService.redirectUrl = state.url;
      window.alert('Veuillez vous identifier. Retour à la page d\'accueil.');
      window.location.href = '/login'; // Replace with your login page URL
      return false;
    }
  };
}
