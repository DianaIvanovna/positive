import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input() trip;
  constructor() {
  }
  ngOnInit(): void {
  }

}

