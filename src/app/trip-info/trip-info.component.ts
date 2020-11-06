import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpTripsService } from '../http-trips.service';
import {DomSanitizer} from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit {
  @ViewChild ('tripUp') tripUp:ElementRef;
  @ViewChild('formBookNative') formBookNative:ElementRef;

  trip;
  readyForWork = false;
  numberActivePhoto:number;
  tripVideo;
  baseUrl:string = 'https://www.youtube.com/embed/';

  // bookTrip = false;
  bookTrip = true;
  formBook:FormGroup;
  mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  messageIsSent = false;

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
    // инициализирую форму бронирования поездки
    this.formBook = new FormGroup({
      // поля для php, чтобы отправить письмо
      project_name: new FormControl('Positive'),
      admin_email: new FormControl('pozitivtour74@pozitivtour74.ru'),
      form_subject: new FormControl('Бронирование поездки'),
      name: new FormControl('', [
        Validators.required,
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/\+7\([0-9]{1}[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/),
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      comment:new FormControl(''),
    });
  }
  ngAfterViewInit(): void {
    window.scrollTo(pageXOffset, 0);
  }
  changeActivePhoto(number){
    this.numberActivePhoto = number;
  }

  // форма забронировать поездку
  closePopup(event){
    if (event.target.classList.contains('popup')){
      this.bookTrip = false;
    }
  }



  submit(){
    this.messageIsSent = true;
    let data = new FormData(this.formBookNative.nativeElement);
    data.append('поездка', this.trip.title);
    data.append('дата', this.trip.date);

    console.log(new FormData(this.formBookNative.nativeElement));
  //   fetch("assets/php/mail.php", {
  //       method: "POST",
  //       body: new FormData(this.formBookNative.nativeElement)
  //     })
  //     .then(data=>{})
  //     .catch(function(error) { console.log(error); });
  }

}
