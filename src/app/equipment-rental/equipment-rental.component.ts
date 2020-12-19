import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-rental',
  templateUrl: './equipment-rental.component.html',
  styleUrls: ['./equipment-rental.component.scss']
})
export class EquipmentRentalComponent implements OnInit {

  equipmentSmall = false;

  dataForWelcomeSection = {
    title: "Прокат",
    titleDark: "горнолыжного оборудования",
    subtitle: "Дёшево, кайфово, только у нас",
    textForButton: "ПОСМОТРЕТЬ ОБОРУДОВАНИЕ",
    img: "./assets/img/background/backgroundRental.png",
    img800: "./assets/img/background/backgroundRental_800.png",
    img500: "./assets/img/background/backgroundRental_500.png",
    img1280: "./assets/img/background/backgroundRental_1280.png",
    link: "#"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
