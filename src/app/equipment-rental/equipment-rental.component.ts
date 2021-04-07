import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-equipment-rental',
  templateUrl: './equipment-rental.component.html',
  styleUrls: ['./equipment-rental.component.scss']
})
export class EquipmentRentalComponent implements OnInit {
  season = "summer";

  equipmentSmall = false;

  dataForWelcomeSection = {}

  dataForWelcomeSectionWinter = {
    title: "Прокат",
    titleDark: "горнолыжного оборудования",
    subtitle: "Челябинск, Екатеринбург",
    link: ".equipmentContainer",
    page: "rent",
    btnText: "ПОСМОТРЕТЬ ОБОРУДОВАНИЕ"
  }
  dataForWelcomeSectionSummer = {
    title: "Прокат",
    titleDark: "лучшего оборудования",
    subtitle: "Челябинск, Екатеринбург",
    link: ".equipmentContainer",
    page: "rent",
    btnText: "ПОСМОТРЕТЬ ОБОРУДОВАНИЕ"
  }


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
        if (params.season == 'summer') this.dataForWelcomeSection = this.dataForWelcomeSectionSummer;
        else this.dataForWelcomeSection = this.dataForWelcomeSectionWinter;
      }
    })
  }
  // ngAfterViewInit(): void {
  //   window.scrollTo(pageXOffset, 0);
  // }
  ngAfterViewInit() {
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


}
