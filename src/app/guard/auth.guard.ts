import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private route: Router) {

  }

  canActivate() {
    if(localStorage.getItem('token') !== null) {
      return true
    }
    this.route.navigateByUrl("/login")
    return false 
  }
  
}
