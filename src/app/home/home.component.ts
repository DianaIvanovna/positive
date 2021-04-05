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
  dataForWelcomeSection = {}

  dataForWelcomeSectionWinter = {
    title: "Горнолыжные",
    titleDark: "туры",
    subtitle: "Челябинск, Екатеринбург",
    link: ".our-trip__title",
    page: "home",
    btnText: "БЛИЖАЙШИЕ ПОЕЗДКИ"
  }
  dataForWelcomeSectionSummer = {
    title: "активный",
    titleDark: "отдых на урале",
    subtitle: "Челябинск, Екатеринбург",
    link: ".our-trip__title",
    page: "home",
    btnText: "БЛИЖАЙШИЕ ПОЕЗДКИ"
  }

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
        if (params.season == 'summer') this.dataForWelcomeSection = this.dataForWelcomeSectionSummer;
        else this.dataForWelcomeSection = this.dataForWelcomeSectionWinter;
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
