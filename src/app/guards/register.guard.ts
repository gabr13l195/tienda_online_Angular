import { CanActivateFn } from '@angular/router';

export const registerGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('login') == "true") {
    return true
  } else {
    return false;
  }
};  
