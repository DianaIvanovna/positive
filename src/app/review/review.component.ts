import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  activeButtonLeft = false;
  activeButtonRight = true;
  activeReview = 0;
  reviews = [
    {
      name: 'отзыв 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. ',
      link: '#',
      img: './assets/img/avatar.png',
    },
    {
      name: 'отзыв 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      link: '#',
      img: './assets/img/avatar.png',
    },
    {
      name: 'отзыв 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. ',
      link: '#',
      img: './assets/img/avatar.png',
    },
    {
      name: 'отзыв 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. ',
      link: '#',
      img: './assets/img/avatar.png',
    },
    {
      name: 'отзыв 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. ',
      link: '#',
      img: './assets/img/avatar.png',
    },
    {
      name: '',
      text: 'Больше отзывов о поездках читайте в нашей группе в Вконтакте  ↓',
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/logo.jpg',
      end: true,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }


  clickReview(event){
    event.preventDefault();

    if (event.clientX < document.documentElement.clientWidth / 2 ) this. previousReview();
    else this.nextReview();
  }
  nextReview(){
    if (this.activeReview !== this.reviews.length - 1){
      this.activeReview++;
      this.activeButtonLeft = true;
    }
    if (this.activeReview === this.reviews.length - 1){
      this.activeButtonRight=false;
    }
  }
  previousReview(){
    if (this.activeReview !== 0){
      this.activeReview--;
      this.activeButtonRight=true;
    }
    if (this.activeReview === 0){
      this.activeButtonLeft = false;
    }
  }
}
