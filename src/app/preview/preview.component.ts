import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goPage(season){
    this.router.navigate(
        ['/trips'],
        {
          queryParams:{
            'season': season,
        }
      }
    );
  }

}
