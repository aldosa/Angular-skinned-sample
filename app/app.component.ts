import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'John Lewis';
  aNumber = "A010101"

  ngOnInit() {

  }


}
