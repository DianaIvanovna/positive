import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-up',
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.scss']
})
export class GoUpComponent {

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
