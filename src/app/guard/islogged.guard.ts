import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloggedGuard implements CanActivate {

  constructor(private route: Router) {}

  canActivate() {
    if(localStorage.getItem('token') == null) {
      return true
    }
    this.route.navigateByUrl("/profile")
    return false 
  }
  
}
