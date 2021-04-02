import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  isPreview = true;

  constructor( ){
    if (location.pathname !='/') this.isPreview = false;
  }

}
