import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  date = new Date()
  textTrim = "text"
  divisors = 15
  ascii = '97 98.99.100 101.102 103'
  constructor() { }

  ngOnInit(): void {
  }

}
