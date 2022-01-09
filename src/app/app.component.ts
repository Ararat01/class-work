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

  ngAfterViewInit(): void {
    console.log(document.getElementById('myId'))
    console.log(document.getElementById('myId')?.style.backgroundColor)
    let a = document.getElementById('myId')
    try {
      if(a) {
        a.style.width = "1000px"
      }
    }
    catch(e) {
      console.log(e);
    }
  }
}
