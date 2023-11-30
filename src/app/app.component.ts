import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavigationEnd, Router } from '@angular/router';
=======
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  isLoginPage: boolean = false;

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { 
        this.isLoginPage = this.router.url.includes('login');
      }
    });
  }
=======
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1
}
