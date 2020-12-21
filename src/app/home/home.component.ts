import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  equipmentSmall = true;
  dataForWelcomeSection = {
    title: "Горнолыжные",
    titleDark: "туры",
    subtitle: "Челябинск, Екатеринбург",
    textForButton: "БЛИЖАЙШИЕ ПОЕЗДКИ",
    imgForButton: "./assets/img/Icon/Calendar.svg",
    img: "./assets/img/background/background.jpg",
    img1280: "./assets/img/background/background_1280.jpg",
    img800: "./assets/img/background/background_800.jpg",
    img500: "./assets/img/background/background_500.jpg",
    link: ".our-trip__title",
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}


