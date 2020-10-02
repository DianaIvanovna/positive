import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-positive-is',
  templateUrl: './positive-is.component.html',
  styleUrls: ['./positive-is.component.scss']
})
export class PositiveIsComponent implements OnInit {

  // @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>
  constructor() { }

  ngOnInit(): void {
  }
  // scrollLeft(){
  //   this.scroll.nativeElement.scrollTo({
  //     left: (this.scroll.nativeElement.scrollLeft - 200),
  //     behavior: 'smooth' });
  // }
  // scrollRigth(){
  //   this.scroll.nativeElement.scrollTo({
  //     left: (this.scroll.nativeElement.scrollLeft + 200),
  //     behavior: 'smooth' });
  // }
}
