import { Component, OnInit, Input } from '@angular/core';

interface Data {
  title: string,
  titleDark?: string,
  subtitle: string,
  textForButton: string,
  img: string,
  img800: string,
  img500: string,
  img1280?: string,
  imgForButton?:string,
  link:string
}

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {
  @Input() data: Data;
  constructor() { }

  ngOnInit(): void {
  }

}
