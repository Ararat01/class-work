import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit, AfterViewInit {

  @Input() data!: number
  @Output() event: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('test') test: any
  @ViewChild('text') text: any

  str = 123

  constructor() { }

  ngOnInit(): void {
    console.log(this.test);
  }

  ngAfterViewInit(): void {
    this.test.nativeElement.style.padding = '5px 20px'
    this.test.nativeElement.style.display = 'block'
    this.text.nativeElement.style.textAlign = 'center'
    this.test.nativeElement.style.margin = '0 auto'
    console.log(this.test.str);
  }

  clck(){
    if(this.data == Infinity) {
      this.event.emit(-1)
    }
    else {
      this.event.emit(this.data)
    }
  }

}
