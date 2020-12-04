import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-rental',
  templateUrl: './equipment-rental.component.html',
  styleUrls: ['./equipment-rental.component.scss']
})
export class EquipmentRentalComponent implements OnInit {

  dataForWelcomeSection = {
    title: "Прокат",
    titleDark: "горнолыжного оборудования",
    subtitle: "Дёшево, кайфово, только у нас",
    textForButton: "ПОСМОТРЕТЬ ОБОРУДОВАНИЕ",
    img: "./assets/img/rental/backgroundRental.png",
    img800: "./assets/img/rental/backgroundRental_800.png",
    img500: "./assets/img/rental/backgroundRental_500.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
