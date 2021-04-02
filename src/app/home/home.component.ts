import { Component, OnInit,  AfterViewInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  season = "summer"

  equipmentSmall = true;
  dataForWelcomeSection = {
    title: "Горнолыжные",
    titleDark: "туры",
    subtitle: "Челябинск, Екатеринбург",
    textForButton: "БЛИЖАЙШИЕ ПОЕЗДКИ",
    imgForButton: "./assets/img/Icon/Calendar.svg",
    img: "./assets/img/background/background.jpg",
    img1280: "./assets/img/background/background_1280.jpg",
    img800: "./assets/img/background/background_800.jpg",
    img500: "./assets/img/background/background_500.jpg",
    link: ".our-trip__title",
  }

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
      }
    })

  }

  ngAfterViewInit() {
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

}
