import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHeader: boolean = false;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart){
        if(event.url != '/'){
          this.showHeader = true;
        } else {
          this.showHeader = false;
        }
      }
    })
   }

  title = 'recaudia-test';
}
