import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private router: Router) {
  }
  
  onLogout() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('Name')

    this.router.navigate(['/login'])
  }
}
