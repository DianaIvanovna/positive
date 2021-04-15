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

}
