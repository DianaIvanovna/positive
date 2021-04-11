import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params , Router} from '@angular/router';
import { HttpTripsService } from '../http-trips.service';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit, AfterViewInit {
  @ViewChild ('videoImg') videoImg:ElementRef;
  equipmentSmall = true;
  season = "summer"
  advantages = [];
  trip;
  readyForWork = false;
  numberActivePhoto:number;

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
        this.httpTripsService.searchByName(params.linkName)
        .subscribe(
          data => {
            this.trip = data;
            this.readyForWork = true;
            console.log(this.trip);
          },
          error => console.log(error)
        );
      }
      else { // массив поедок уже загружен
        this.trip = this.httpTripsService.trips.find((item)=>{
          return item.linkName === params.linkName
        });
        this.readyForWork = true;
      }
    })
    this.numberActivePhoto = 0;

  }
  ngAfterViewInit(): void {
    window.scrollTo(pageXOffset, 0);

    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
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
      })
    });
    const lazyImages = document.querySelectorAll('.lazy-image')
    lazyImages.forEach((v) => {
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

}


