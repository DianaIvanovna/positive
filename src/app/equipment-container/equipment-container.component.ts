import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HttpRentsService } from '../http-rents.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-equipment-container',
  templateUrl: './equipment-container.component.html',
  styleUrls: ['./equipment-container.component.scss']
})
export class EquipmentContainerComponent implements OnInit {
  @Input() equipmentSmall;
  season='summer';
  indexActive = 0;
  screenWidth;
  equipments =[
    {
      title: "Полный комплект",
      description: "Сноуборд или Горные лыжи, крепление, ботинки",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 400,
          withoutUs:400,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 1000,
          withoutUs:1200,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 500,
          withoutUs:600,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 800,
          withoutUs:1000,
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
      title: "Сноуборд или горные лыжи",
      description: "С креплениями",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 300,
          withoutUs:350,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 700,
          withoutUs:800,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 400,
          withoutUs:450,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 500,
          withoutUs:700,
        },
      ],
      form: {
        footSize: false,
        height: true,
        weight: true,
        clothingSize: false,
        headCircumference: false,
      },
      img: "./assets/img/equipments/2.png",
    },
    {
      title: "Ботинки",
      description: "",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 200,
          withoutUs:250,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 400,
          withoutUs:500,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 250,
          withoutUs:300,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 400,
          withoutUs:500,
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
      title: "Защита",
      description: "Маска, шлем, шорты",
      price: [
        {
          title: "будние дни",
          titleDisabled: "(сутки)",
          withUs: 100,
          withoutUs:150,
        },
        {
          title: "2 дня",
          titleDisabled: "(сб-вск)",
          withUs: 300,
          withoutUs:450,
        },
        {
          title: "выходные",
          titleDisabled: "(сутки)",
          withUs: 200,
          withoutUs:250,
        },
        {
          title: "праздничные дни",
          titleDisabled: "(сутки)",
          withUs: 250,
          withoutUs:300,
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
  constructor(private httpRentsService:HttpRentsService, private route: ActivatedRoute) { this.onResize(); }


  activeButtonRight = false;
  activeButtonLeft = false;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }


  ngOnInit(): void {
    if (this.equipments.length > 2 && this.screenWidth >1024) this.activeButtonRight = true;
    else if (this.equipments.length > 1 && this.screenWidth <=1024) this.activeButtonRight = true;


    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
      }
    })

    if (this.httpRentsService.getLoadingRents(this.season) === undefined){
      console.log('!')
      if (this.season == 'summer'){
        this.httpRentsService.getRentsSummer()
        .subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error)
        );
      }else if (this.season == 'winter'){
        this.httpRentsService.getRentsWinter()
        .subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error)
        );
      }
    } else { // массив проката уже загружен
    }




  }
  previousEquipment(){
    if(this.screenWidth <=1024){ // мобильная версия, листает по 1 товару
      if (this.indexActive !== 0){
        this.indexActive--;
        this.activeButtonRight = true;
      }
      if (this.indexActive === 0){
        this.activeButtonLeft = false;
      }
    }else{ // листают по 2 товара
      if (this.indexActive !== 0){
        this.indexActive-=2;
        this.activeButtonRight = true;
      }
      if (this.indexActive === 0){
        this.activeButtonLeft = false;
      }
    }

  }
  nextEquipment(){
    if(this.screenWidth <=1024){// мобильная версия, листает по 1 товару
      if (this.indexActive !== this.equipments.length - 1){
        this.indexActive++;
        this.activeButtonLeft = true;
      }
      if (this.indexActive === this.equipments.length - 1){
        this.activeButtonRight=false;
      }
    }else{// листают по 2 товара
      let extremeValue = 1
      if (this.equipments.length%2===0){
        extremeValue = 2;
      }
      if (this.indexActive !== this.equipments.length - extremeValue){
        this.indexActive+=2;
        this.activeButtonLeft = true;
      }
      if (this.indexActive === this.equipments.length - extremeValue){
        this.activeButtonRight=false;
      }
    }
  }


}
