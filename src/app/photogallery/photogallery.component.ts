import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss']
})
export class PhotogalleryComponent implements OnInit {
  urlBigPhoto = "";

  activeButtonLeft = false;
  activeButtonRight = true;
  activeLayer = 8;
  photos = [
    "./assets/img/фото1.jpg",
    "./assets/img/фото2.jpg",
    "./assets/img/фото3.jpg",
    "./assets/img/фото4.jpg",
    "./assets/img/фото5.jpg",
    "./assets/img/фото6.jpg",
    "./assets/img/фото1.jpg",
    "./assets/img/фото2.jpg",
    "./assets/img/avatar.png", // 1 фото
    "./assets/img/фото2.jpg",
    "./assets/img/фото3.jpg",
    "./assets/img/фото4.jpg",
    "./assets/img/фото5.jpg",
    "./assets/img/фото6.jpg",
    "./assets/img/фото1.jpg",
    "./assets/img/фото2.jpg",
    "./assets/img/фото1.jpg",
    "./assets/img/avatar.png", // второе фото
    "./assets/img/фото3.jpg",
    "./assets/img/фото4.jpg",
    "./assets/img/фото5.jpg",
    "./assets/img/фото6.jpg",
    "./assets/img/фото1.jpg",
    "./assets/img/фото2.jpg",
  ];
  photosActive = [
    "./assets/img/фото1.jpg",
  "./assets/img/фото2.jpg",
  "./assets/img/фото3.jpg",
  "./assets/img/фото4.jpg",
  "./assets/img/фото5.jpg",
  "./assets/img/фото6.jpg",
  "./assets/img/фото1.jpg",
  "./assets/img/фото2.jpg",];

  constructor() { }

  ngOnInit(): void {
  }
  next(event){
    event.preventDefault();
    if (this.activeLayer/ 8 !== this.photos.length / 8 ){
      this.photosActive = this.photos.slice (this.activeLayer/ 8 * 8 , this.activeLayer/ 8 * 8 + 8);
      this.activeLayer+=8;
      this.activeButtonLeft = true;
    }
    if (this.activeLayer/ 8 === this.photos.length / 8){
      this.activeButtonRight = false;
    }
  }
  previous(event){
    event.preventDefault();
    if (this.activeLayer/ 8 !== 1 ){
      this.activeLayer-=8;
      this.activeButtonRight=true;
      this.photosActive = this.photos.slice(this.activeLayer-8, this.activeLayer);
    }
    if (this.activeLayer/ 8 === 1){
      this.activeButtonLeft = false;
    }

  }
  closePopup(event){
    if (event.target.classList.contains('popup')){
      this.urlBigPhoto = ""
    }
  }
}


