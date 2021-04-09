import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
// import Swiper core and required modules


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderContainer') sliderContainer;
  @ViewChild('sliderWrapper') sliderWrapper;
  @ViewChild('slide') slide;
  @Input() trips;
  activeButtonLeft = false;
  activeButtonRight = true;
  activeTrip = 0;
  widthSlide = 0;
  movingX = 0;
  maxMovingX = 0;
  dashesMas=[];


  ngOnInit(){
    let buf = this.trips.length;
    if (window.innerWidth>900 && buf > 2) buf = buf - 2;
    else if (window.innerWidth>600 && buf > 1) buf = buf - 1;
    else if (window.innerWidth<600 && buf > 1) buf = buf;
    else buf = 0;
    for (var i = 1; i <= buf; i++) {
      this.dashesMas.push(i);
    }
  }

  ngAfterViewInit(){
    this.widthSlide = this.slide.nativeElement.clientWidth;
    const numberSlides = +(this.sliderWrapper.nativeElement.clientWidth / this.widthSlide).toFixed();
    this.maxMovingX = -this.widthSlide * (this.trips.length - numberSlides);
  }

  nextSlide(){
    if (this.movingX !== this.maxMovingX){
      this.movingX = this.movingX - this.widthSlide;
      this.activeTrip++;
      this.activeButtonLeft = true;
      this.sliderWrapper.nativeElement.style.transform = `translateX(${this.movingX}px)`;
    }
    if (this.movingX == this.maxMovingX) this.activeButtonRight = false;
  }

  previousSlide(){
    if (this.movingX != 0){
      this.movingX = this.movingX + this.widthSlide;
      this.activeTrip--;
      this.activeButtonRight= true;
      this.sliderWrapper.nativeElement.style.transform = `translateX(${this.movingX}px)`;
    }
    if (this.movingX == 0) this.activeButtonLeft = false;
  }

  openSlide(i){
    this.activeButtonRight=true;
    this.activeButtonLeft = true;
    if (i===0) this.activeButtonLeft = false;
    else if (i=== this.dashesMas.length -1) this.activeButtonRight=false;
    this.movingX = -i*this.widthSlide;
    this.sliderWrapper.nativeElement.style.transform = `translateX(${this.movingX}px)`;
    this.activeTrip=i;
  }

}
