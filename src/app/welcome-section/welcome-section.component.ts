import { Component, OnInit, Input } from '@angular/core';

interface Data {
  title: string,
  titleDark?: string,
  subtitle: string,
  link: string,
  page: string,
  btnText: string
}

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {
  @Input() data: Data;
  @Input() season:string;
  constructor() { }

  ngOnInit(): void {

  }

  scrollToBook(event, link){ // функция только для перехода по ссылке забронировать
    event.preventDefault();
    const element:HTMLElement = document.querySelector(link);
    let rect = element.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let elementTop = rect.top + scrollTop;
    window.scroll({
      left:0,
      top: elementTop,
      behavior: 'smooth'
    })

  }

}
