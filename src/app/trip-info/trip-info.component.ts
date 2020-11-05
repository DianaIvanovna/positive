import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpTripsService } from '../http-trips.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit {
  @ViewChild ('tripUp') tripUp:ElementRef;

  trip;
  readyForWork = false;
  numberActivePhoto:number;
  tripVideo;
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private httpTripsService:HttpTripsService,
    private route: ActivatedRoute, private sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {
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
        })
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

}
