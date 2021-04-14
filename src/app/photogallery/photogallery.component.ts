import { Component, Input, OnInit, } from '@angular/core';
import photosWinter from "./winter";
import photosSummer from "./summer";

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss']
})
export class PhotogalleryComponent implements OnInit {
  @Input() season;
  readyForWork = false;
  urlBigPhoto = "";
  bigPhoto = {
    photoWebp: '',
    photo: '',
    description: '',
    index: undefined,
  }
  activeButtonBigPhotoLeft = true;
  activeButtonBigPhotoRight = true;
  photos = []
  activeButtonLeft = false;
  activeButtonRight = true;
  photoPages = 0;
  photoPagesActive = 0;
  photosActive = [];

  constructor() { }

  ngOnInit(): void {
    if (this.season == 'winter'){
      this.photos = photosWinter;
    }else {
      this.photos = photosSummer;
    }
    this.photosActive = this.photos.slice(this.photoPagesActive, this.photoPagesActive + 8);
    this.photoPages = this.photos.length ;
    this.readyForWork = true;

  }
  next(event){
    event.preventDefault();
    if (this.photoPagesActive!==this.photoPages - 8){
      this.photoPagesActive = this.photoPagesActive + 8;
      this.activeButtonLeft = true;
      this.photosActive = this.photos.slice(this.photoPagesActive, this.photoPagesActive + 8);
    }
    if (this.photoPagesActive===this.photoPages - 8) this.activeButtonRight = false;
    console.log(this.photoPagesActive, this.photoPages)
  }
  previous(event){
    event.preventDefault();
    if (this.photoPagesActive!==0){
      this.photoPagesActive-=8;
      this.activeButtonRight=true;
      this.photosActive = this.photos.slice(this.photoPagesActive, this.photoPagesActive + 8);
    }
    if (this.photoPagesActive===0) this.activeButtonLeft = false;
  }
  closePopup(event){
    if (event.target.classList.contains('popup')){
      this.bigPhoto.photoWebp = ""
      this.bigPhoto.photo = ""
    }
  }
  openBigPhoto(photo, index){
    this.bigPhoto.photoWebp = photo.photoBigWebp;
    this.bigPhoto.photo = photo.photo;
    this.bigPhoto.description= photo.description;
    this.bigPhoto.index = index;
    this.activeButtonBigPhotoLeft = true;
      this.activeButtonBigPhotoRight = true;
    if (index === 0){
      this.activeButtonBigPhotoLeft = false;
    }else if (index === this.photosActive.length - 1){
      this.activeButtonBigPhotoRight = false;
    }
  }
  nextBigPhoto(event){
    event.preventDefault();
    if (this.bigPhoto.index !== this.photosActive.length - 1){
      this.activeButtonBigPhotoLeft = true;
      this.bigPhoto.index+=1;
      this.bigPhoto.photoWebp = this.photosActive[this.bigPhoto.index].photoBigWebp;
      this.bigPhoto.photo = this.photosActive[this.bigPhoto.index].photo;
      this.bigPhoto.description = this.photosActive[this.bigPhoto.index].description;
    }
    if (this.bigPhoto.index === this.photosActive.length - 1){
      this.activeButtonBigPhotoRight = false;
    }
  }
  previousBigPhoto($event){
    event.preventDefault();
    if (this.bigPhoto.index !== 0){
      this.activeButtonBigPhotoRight = true;
      this.bigPhoto.index--;
      this.bigPhoto.photoWebp = this.photosActive[this.bigPhoto.index].photoBigWebp;
      this.bigPhoto.photo = this.photosActive[this.bigPhoto.index].photo;
      this.bigPhoto.description = this.photosActive[this.bigPhoto.index].description;
    }
    if (this.bigPhoto.index === 0){
      this.activeButtonBigPhotoLeft = false;
    }

  }

}


