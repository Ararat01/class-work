import { Component, 
  Input, 
  OnInit,
  DoCheck,
  OnChanges,
 AfterContentInit, 
 AfterContentChecked, 
 AfterViewChecked, 
 AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'class-work';
  text = ''

  
  test(value: string) {
    this.text = value
  }

}
