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
  @Input() season:string;

  data = {}

  dataTripWinter = {
    title: "Горнолыжные",
    titleDark: "туры",
    subtitle: "Челябинск, Екатеринбург",
    link: ".our-trip__title",
    page: "home",
    btnText: "БЛИЖАЙШИЕ ПОЕЗДКИ"
  }
  dataTripSummer = {
    title: "активный",
    titleDark: "отдых на урале",
    subtitle: "Челябинск, Екатеринбург",
    link: ".our-trip__title",
    page: "home",
    btnText: "БЛИЖАЙШИЕ ПОЕЗДКИ"
  }

  dataRentWinter = {
    title: "Прокат",
    titleDark: "горнолыжного оборудования",
    subtitle: "Челябинск, Екатеринбург",
    link: ".equipmentContainer",
    page: "rent",
    btnText: "ПОСМОТРЕТЬ ОБОРУДОВАНИЕ"
  }
  dataRentSummer = {
    title: "Прокат",
    titleDark: "лучшего оборудования",
    subtitle: "Челябинск, Екатеринбург",
    link: ".equipmentContainer",
    page: "rent",
    btnText: "ПОСМОТРЕТЬ ОБОРУДОВАНИЕ"
  }

  constructor() { }

  ngOnInit(): void {
    if (window.location.href.includes('trips')){
      if (this.season == "summer") this.data = this.dataTripSummer;
      else this.data = this.dataTripWinter;
    }
    else if (window.location.href.includes('rent')){
      if (this.season == "summer") this.data = this.dataRentSummer;
      else this.data = this.dataRentWinter;
    }
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
