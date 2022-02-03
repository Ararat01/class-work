import { Component, 
  Input, 
  OnInit,
  DoCheck,
  OnChanges,
 AfterContentInit, 
 AfterContentChecked, 
 AfterViewChecked, 
 AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'class-work';

  constructor(private route: Router){}

  logout() {
    this.route.navigateByUrl("/login")
    localStorage.removeItem('token')
  }
}
