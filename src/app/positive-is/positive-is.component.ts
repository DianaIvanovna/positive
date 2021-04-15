import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-positive-is',
  templateUrl: './positive-is.component.html',
  styleUrls: ['./positive-is.component.scss']
})
export class PositiveIsComponent implements OnInit {
  @Input() season;

  constructor() {
  }

  ngOnInit(): void {
  }

}
