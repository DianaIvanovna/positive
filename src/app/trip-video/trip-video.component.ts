import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-trip-video',
  templateUrl: './trip-video.component.html',
  styleUrls: ['./trip-video.component.scss']
})
export class TripVideoComponent implements OnInit {
  @Input() video;

  tripVideo;
  imgTripVideo="";
  showVideo=false;
  baseUrl:string = 'https://www.youtube.com/embed/';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.tripVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video);
    this.imgTripVideo = `https://i.ytimg.com/vi/${this.video}/maxresdefault.jpg`;
  }

}
