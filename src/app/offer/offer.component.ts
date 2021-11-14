import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  season = "summer"
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
      }
    })
  }
  ngAfterViewInit() {
    window.scrollTo(pageXOffset, 0);
  }

}
