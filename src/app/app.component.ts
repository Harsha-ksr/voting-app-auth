import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-app';
  constructor(private router: Router) {
    // Add a listener for the NavigationStart event
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Check if the user is navigating back
        if (event.navigationTrigger === 'popstate') {
          // Prevent navigation to the previous page
          this.router.navigate(['/']);
        }
      }
    });
}
}
