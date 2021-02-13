/*
This component contains the blue ribbon for the application
*/
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [``]
})
export class NavComponent implements OnInit {
  @Input() name: string;  
  constructor() { }

  ngOnInit() {

  }

}
