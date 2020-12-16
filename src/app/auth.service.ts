import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = 'uygj76g5g7u6ry5rgut766gt768ti8776465fu7';

  login(name: string, password: string): boolean {
    debugger;
    if (name === "admin" && password === "admin"){
      localStorage.setItem('user', this.token);
      this.router.navigate(['']);
      return true;
    }

    return false;
  }

  isLoggedIn() {
    debugger;
    let token = localStorage.getItem('user');

    return token === this.token;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login-page']);
  }

  constructor(private router: Router) { }
}


