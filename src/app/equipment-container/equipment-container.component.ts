import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-container',
  templateUrl: './equipment-container.component.html',
  styleUrls: ['./equipment-container.component.scss']
})
export class EquipmentContainerComponent implements OnInit {

  equipments =[
    {
      title: "полный Комплект",
      description: "Сноуборд или Горные лыжи, крепление, ботинки",
      price: {
        weekdays: {
          withUs: 300,
          withoutUs:400,
        },
        twoDays: {
          withUs: 1100,
          withoutUs:900,
        },
        weekends: {
          withUs: 600,
          withoutUs:500,
        },
        holidays: {
          withUs: 700,
          withoutUs:600,
        },
      },
      img: "./assets/img/equipments/1.png",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
