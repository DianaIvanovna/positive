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
  readyForWork = false;
  indexActive = 0;
  screenWidth;
  rents = []
  constructor(private httpRentsService:HttpRentsService, private route: ActivatedRoute) { this.onResize(); }


  activeButtonRight = false;
  activeButtonLeft = false;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
      }
    })

    if (this.httpRentsService.getLoadingRents(this.season) === undefined){
      if (this.season == 'summer'){
        this.httpRentsService.getRentsSummer()
        .subscribe(
          data => {
            console.log(data);
            this.rents = data;
          },
          error => console.log(error)
        );
      }else if (this.season == 'winter'){
        this.httpRentsService.getRentsWinter()
        .subscribe(
          data => {
            console.log(data);
            this.rents = data;
          },
          error => console.log(error)
        );
      }
    this.readyForWork = true;
    } else { // массив проката уже загружен
      this.rents = this.httpRentsService.getLoadingRents(this.season);
      this.readyForWork = true;
    }
  }
  // previousEquipment(){
  //   if(this.screenWidth <=1024){ // мобильная версия, листает по 1 товару
  //     if (this.indexActive !== 0){
  //       this.indexActive--;
  //       this.activeButtonRight = true;
  //     }
  //     if (this.indexActive === 0){
  //       this.activeButtonLeft = false;
  //     }
  //   }else{ // листают по 2 товара
  //     if (this.indexActive !== 0){
  //       this.indexActive-=2;
  //       this.activeButtonRight = true;
  //     }
  //     if (this.indexActive === 0){
  //       this.activeButtonLeft = false;
  //     }
  //   }

  // }
  // nextEquipment(){
  //   if(this.screenWidth <=1024){// мобильная версия, листает по 1 товару
  //     if (this.indexActive !== this.equipments.length - 1){
  //       this.indexActive++;
  //       this.activeButtonLeft = true;
  //     }
  //     if (this.indexActive === this.equipments.length - 1){
  //       this.activeButtonRight=false;
  //     }
  //   }else{// листают по 2 товара
  //     let extremeValue = 1
  //     if (this.equipments.length%2===0){
  //       extremeValue = 2;
  //     }
  //     if (this.indexActive !== this.equipments.length - extremeValue){
  //       this.indexActive+=2;
  //       this.activeButtonLeft = true;
  //     }
  //     if (this.indexActive === this.equipments.length - extremeValue){
  //       this.activeButtonRight=false;
  //     }
  //   }
  // }


}
