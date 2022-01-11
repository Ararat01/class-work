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

  ngAfterViewInit(): void {
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

  test(value: string) {
    this.text = value
  }

}
