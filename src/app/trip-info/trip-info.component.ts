import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpTripsService } from '../http-trips.service';
import {DomSanitizer} from '@angular/platform-browser';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit {
  @ViewChild ('tripUp') tripUp:ElementRef;
  equipmentSmall = true;

  trip;
  readyForWork = false;
  numberActivePhoto:number;
  tripVideo;
  baseUrl:string = 'https://www.youtube.com/embed/';

  constructor(private httpTripsService:HttpTripsService,
    private route: ActivatedRoute, private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  ngOnInit(): void {
    // загружаю данные о поездке
    this.route.params.subscribe((params: Params)=>{
      if (this.httpTripsService.trips === undefined) {
        this.httpTripsService.searchByName(params.linkName)
        .subscribe(
          data => {
            this.trip = data;
            this.tripVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.trip.video);
            this.readyForWork = true;
            console.log(this.baseUrl + this.trip.video);
          },
          error => console.log(error)
        );
      }
      else { // массив поедок уже загружен
        this.trip = this.httpTripsService.trips.find((item)=>{
          return item.linkName === params.linkName
        });
        this.tripVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.trip.video);
        this.readyForWork = true;
      }
    })
    this.numberActivePhoto = 0;

  }
  ngAfterViewInit(): void {
    window.scrollTo(pageXOffset, 0);
  }
  changeActivePhoto(number){
    this.numberActivePhoto = number;
  }

  scrollToBook(event){ // функция только для перехода по ссылке забронировать
    event.preventDefault();
    const element:HTMLElement = document.querySelector('.tariffLink');
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


