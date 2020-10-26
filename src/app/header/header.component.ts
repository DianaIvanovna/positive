import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobule = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  scrollTo(event){
    event.preventDefault();
    this.mobule = false;
    const element:HTMLElement = document.querySelector('' + event.target.getAttribute('href'));
    if (element !== null) {
      let rect = element.getBoundingClientRect();
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let elementTop = rect.top + scrollTop;
      window.scroll({
        left:0,
        top: elementTop,
        behavior: 'smooth'
      })
    }else {
      document.location.href = event.target.getAttribute('href');

    }

  }

}
