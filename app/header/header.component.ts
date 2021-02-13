/*
This component contains the blue ribbon for the application
*/


import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name: string;
  @Input() aNumber: string; 
  constructor() { }

  ngOnInit() {

  }

}
