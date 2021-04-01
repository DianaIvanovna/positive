import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'positive';
  showButtonUp = false;

  constructor() {
    window.addEventListener('scroll', ()=>{
      var scrolled = window.pageYOffset;

      if (scrolled > 500) {
        this.showButtonUp = true;
      }else {
        this.showButtonUp = false;
      }
    });
  }
  scrollUp(event){
    event.preventDefault();
    window.scroll({
      left:0,
      top: 0,
      behavior: 'smooth'
    })

  }
}
