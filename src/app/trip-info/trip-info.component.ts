import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params , Router} from '@angular/router';
import { HttpTripsService } from '../http-trips.service';
import { HttpClient  } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit, AfterViewInit {
  @ViewChild ('videoImg') videoImg:ElementRef;
  @ViewChild('formBookNative') formBookNative:ElementRef;
  equipmentSmall = true;
  season = "summer"
  advantages = [];
  trip;
  readyForWork = false;
  numberActivePhoto:number;


  bookTrip = false; // открытия попапа забронировать
  formBook:FormGroup;
  mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  maskDate=[/\d/, /\d/,'.',/\d/, /\d/,'.',/\d/, /\d/,/\d/, /\d/,];
  messageIsSent = 1;
  tariff = '' ;

  constructor(private httpTripsService:HttpTripsService,
    private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
      }
    })
    // загружаю данные о поездке
    this.route.params.subscribe((params: Params)=>{
      if (this.httpTripsService.trips === undefined) {
        this.httpTripsService.getTrips(this.season)
        .subscribe(
          data => {
            this.trip = data.find((item)=>{
              return item.linkName === params.linkName
            });
            this.initform();
            this.readyForWork = true;

          },
          error => console.log(error)
        );

      }
      else { // массив поедок уже загружен
        this.trip = this.httpTripsService.trips.find((item)=>{
          return item.linkName === params.linkName
        });
        this.initform();
        this.readyForWork = true;
      }
    })
    this.numberActivePhoto = 0;
  }

initform(){
 // инициализирую форму бронирования поездки
  this.formBook = new FormGroup({
    // поля для php, чтобы отправить письмо
    project_name: new FormControl('Positive'),
    admin_email: new FormControl('pozitivtour74@pozitivtour74.ru'),
    form_subject: new FormControl('Бронирование поездки'),
    trip: new FormControl(this.trip.title),
    dateTrip: new FormControl(this.trip.date),
    tariff: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
    ]),
    tel: new FormControl('', [
      Validators.required,
      Validators.pattern(/\+7\([0-9]{1}[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/),
    ]),
    numberPerson: new FormControl('', [
      Validators.required,
    ]),
    dateBirth: new FormControl('', [
      Validators.required,
      Validators.pattern(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/),
    ]),
    comment:new FormControl(''),
  });
}

  ngAfterViewInit(): void {
    window.scrollTo(pageXOffset, 0);

    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('anim__title')){ // анимация заголовка
              entry.target.classList.add('anim__title_active');
              imgObserver.unobserve(entry.target);
            }else {
              const lazyPicture = entry.target;
              const lazyImage = lazyPicture.getElementsByTagName("img");
              const sourseLazyImage = lazyPicture.getElementsByTagName("source");
              Array.from(sourseLazyImage).forEach((item)=>{
                item.setAttribute('srcset', item.getAttribute('data-srcset'))
              })
              lazyImage[0].setAttribute('srcset', lazyImage[0].getAttribute('data-srcset'));
              lazyPicture.classList.remove("lazy-image");
              imgObserver.unobserve(lazyPicture);
            }
          }
      })
    });
    const lazyImages = document.querySelectorAll('.lazy-image')
    const animTitles = document.querySelectorAll('.anim__title');
    lazyImages.forEach((v) => {
        imageObserver.observe(v);
    })
    animTitles.forEach((v)=>{
      imageObserver.observe(v);
    })
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

  setImgVideo(){
    console.log('!')
  }

  goBack(event){
    event.preventDefault();
    this.router.navigate( ["/trips"], {
      queryParams: {
        'season': this.season,
      },
      fragment: `ourTrip`
    });

  }

  // форма забронировать поездку
  closePopup(event){
    if (event.target.classList.contains('popup')){
      this.bookTrip = false;
    }
  }

  submit(){
    this.messageIsSent = 2;
    this.formBookNative.nativeElement.tariff.value = this.tariff;
    fetch("assets/php/mail.php", {
        method: "POST",
        body: new FormData(this.formBookNative.nativeElement)
      })
      .then(data=>{
      })
      .catch(function(error) { console.log(error); });
  }

  // openPopup(tarif){
  //   console.log('!')
  //   this.tariff = tarif;
  //   // очищает форму
  //   // this.formBook.reset();
  //   this.messageIsSent = 1; // !!!!!!!!!!!!!!!!!!!!!!!!!!
  //   this.bookTrip = true;
  // }

  openPopup(url){
    if (url) {
      window.location.href = url;
    } else {
      alert("Упс! Что-то пошло не так")
    }

  }

}


