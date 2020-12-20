import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment-container',
  templateUrl: './equipment-container.component.html',
  styleUrls: ['./equipment-container.component.scss']
})
export class EquipmentContainerComponent implements OnInit {
  @Input() equipmentSmall;

  equipments =[
    {
      title: "полный комплект",
      description: "Сноуборд или Горные лыжи, крепление, ботинки",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 300,
          withoutUs:400,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 1100,
          withoutUs:900,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 600,
          withoutUs:500,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 700,
          withoutUs:600,
        },
      ],
      form: {
        footSize: true,
        height: true,
        weight: true,
        clothingSize: false,
        headCircumference: false,
      },
      img: "./assets/img/equipments/1.png",
    },
    {
      title: "сноуборд или горные лыжи",
      description: "С креплениями",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 300,
          withoutUs:400,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 1100,
          withoutUs:900,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 600,
          withoutUs:500,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 700,
          withoutUs:600,
        },
      ],
      form: {
        footSize: false,
        height: false,
        weight: true,
        clothingSize: false,
        headCircumference: false,
      },
      img: "./assets/img/equipments/2.png",
    },
    {
      title: "ботинки",
      description: "",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 300,
          withoutUs:400,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 1100,
          withoutUs:900,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 600,
          withoutUs:500,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 700,
          withoutUs:600,
        },
      ],
      form: {
        footSize: true,
        height: false,
        weight: false,
        clothingSize: false,
        headCircumference: false,
      },
      img: "./assets/img/equipments/3.png",
    },
    {
      title: "защита",
      description: "Маска, шлем, шорты",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 300,
          withoutUs:400,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 1100,
          withoutUs:900,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 600,
          withoutUs:500,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 700,
          withoutUs:600,
        },
      ],
      form: {
        footSize: false,
        height: false,
        weight: false,
        clothingSize: true,
        headCircumference:true,
      },
      img: "./assets/img/equipments/4.png",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
