import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

canActivate() {
    const user = this.authService.getCurrentUser();

    if (user && user.isAdmin) {
        return true;

    } else {
        this.router.navigate(['/']);
        return false;
    }
}
  
}
